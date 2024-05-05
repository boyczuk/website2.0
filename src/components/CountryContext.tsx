import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface Country {
    name: string;
    lat: number;
    lon: number;
}

interface CountryContextType {
    randomCountry: any;
    setRandomCountry: React.Dispatch<React.SetStateAction<any>>;
    guessedCountry: any;
    setGuessedCountry: React.Dispatch<React.SetStateAction<any>>;
    calculateDistance: (countryA: Country, countryB: Country) => number;
    countryData: Country[]; // Provide country data directly to consumers
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export const CountryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [randomCountry, setRandomCountry] = useState<any>(null);
    const [guessedCountry, setGuessedCountry] = useState<any>(null);
    const [countryData, setCountryData] = useState<Country[]>([]);

    // Fetch country data from the restcountries API
    const fetchCountryData = async () => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            const formattedData: Country[] = data.map((country: any) => ({
                name: country.name.common, // Adjust based on the actual API response structure
                lat: country.latlng[0],
                lon: country.latlng[1],
            }));
            setCountryData(formattedData);
        } catch (error) {
            console.error("Failed to fetch country data:", error);
        }
    };

    useEffect(() => {
        fetchCountryData();
    }, []);

    // Haversine Formula implementation
    const calculateDistance = (countryA: Country, countryB: Country): number => {
        const toRadians = (degree: number) => degree * (Math.PI / 180);

        const R = 6371; // Earth's radius in kilometers
        const dLat = toRadians(countryB.lat - countryA.lat);
        const dLon = toRadians(countryB.lon - countryA.lon);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRadians(countryA.lat)) * Math.cos(toRadians(countryB.lat)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;

        return distance;
    };
return (
    <CountryContext.Provider value={{ randomCountry, setRandomCountry, guessedCountry, setGuessedCountry, calculateDistance, countryData }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = () => {
  const context = useContext(CountryContext);
  if (context === undefined) {
    throw new Error('useCountry must be used within a CountryProvider');
  }
  return context;
};