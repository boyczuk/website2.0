import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useCountry } from './CountryContext';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function createData(
  name: string,
  distance: number,
  direction: string,
) {
  return { name, distance, direction };
}



// Decide if random on each open or one per day is better

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [allCountries, setAllCountries] = useState<{ label: string }[]>([]);
  const { randomCountry } = useCountry();
  const [rows, setRows] = useState<Array<{ name: string, distance: number, direction: string }>>([]);
  const [isCorrectGuess, setIsCorrectGuess] = useState(false);
  const [correctCountryName, setCorrectCountryName] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const countryData = await response.json();
        const countryOptions = countryData.map((country: any) => ({
          label: country.name.common, // Adjust based on the actual structure
          lat: country.latlng[0],
          lon: country.latlng[1],
        }));
        setAllCountries(countryOptions);
      } catch (error) {
        console.error('Error fetching the countries: ', error);
      }
    };

    if (isOpen) {
      fetchCountries();
    }
  }, [isOpen]);

  const handleCountrySelect = (event: any, value: { label: string } | null) => {
    if (value && randomCountry && value.label === randomCountry.properties.ADMIN) {
      setIsCorrectGuess(true);
      setCorrectCountryName(value.label);
      console.log("Correct guess:", value.label);

    } else if (value) {
      setIsCorrectGuess(false);

      // Get distance and direction to correct country


      const newRows = rows.concat(createData(value.label, 0, "N/A"));
      setRows(newRows);

    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        {isCorrectGuess && (
          <h2 style={{ color: 'green', fontWeight: 'bold' }}>{correctCountryName}</h2>
        )}
        <Autocomplete
          id="country-select-demo"
          sx={{ width: 300, backgroundColor: 'white' }}
          options={allCountries}
          autoHighlight
          getOptionLabel={(option) => option.label}
          onChange={handleCountrySelect}
          renderInput={(params) => (
            <TextField
              {...params}
              label=""
              placeholder="Country, territory..."
            />
          )}
        />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 400 }} size="small" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Country</TableCell>
                <TableCell align="right">Distance (km)</TableCell>
                <TableCell align="right">Direction</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    {row.distance}
                  </TableCell>
                  <TableCell align="right">
                    {row.direction}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Modal;
