import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import { FeatureCollection } from 'geojson';
import 'leaflet/dist/leaflet.css';

const CountryGuessMap: React.FC = () => {
  const [geoJsonData, setGeoJsonData] = useState<FeatureCollection | null>(null);
  const [randomCountry, setRandomCountry] = useState<any>(null);

  useEffect(() => {
    // Fetch the GeoJSON data for countries
    const fetchGeoJsonData = async () => {
      const response = await fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson');
      const data: FeatureCollection = await response.json();
      return data;
    };

    fetchGeoJsonData().then((data) => {
      setGeoJsonData(data);
      // Select a random country's outline to display
      const randomIndex = Math.floor(Math.random() * data.features.length);
      setRandomCountry(data.features[randomIndex]);
    }).catch((error) => {
      console.error('Error fetching the GeoJSON data: ', error);
    });
  }, []);

  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {randomCountry && <GeoJSON key={(randomCountry.properties as any).ISO_A3} data={randomCountry} />}
    </MapContainer>
  );
};

export default CountryGuessMap;
