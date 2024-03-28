import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { FeatureCollection } from 'geojson';

const CountryGuessMap: React.FC = () => {
    const [randomCountry, setRandomCountry] = useState<any>(null);
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const fetchGeoJsonData = async () => {
            const response = await fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson');
            const data: FeatureCollection = await response.json();
            const randomIndex = Math.floor(Math.random() * data.features.length);
            setRandomCountry(data.features[randomIndex]);
        };

        fetchGeoJsonData().catch((error) => {
            console.error('Error fetching the GeoJSON data: ', error);
        });
    }, []);

    useEffect(() => {
        if (randomCountry && svgRef.current) {
            const svg = d3.select(svgRef.current);
            svg.selectAll("*").remove(); // Clear SVG

            const width = 400;
            const height = 400;
            const projection = d3.geoNaturalEarth1()
                .fitSize([width, height], randomCountry);
            const pathGenerator = d3.geoPath().projection(projection);

            console.log(randomCountry.properties.ADMIN);

            svg.append('path')
                .attr('d', pathGenerator(randomCountry))
                .attr('fill', 'white')
                .attr('stroke', 'white');
        }
    }, [randomCountry]);

    return (
        <svg ref={svgRef} width={600} height={400} />
    );
};

export default CountryGuessMap;
