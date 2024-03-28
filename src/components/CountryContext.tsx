import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CountryContextType {
  randomCountry: any; // Define a more specific type if possible
  setRandomCountry: React.Dispatch<React.SetStateAction<any>>;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export const CountryProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [randomCountry, setRandomCountry] = useState<any>(null);

  return (
    <CountryContext.Provider value={{ randomCountry, setRandomCountry }}>
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
