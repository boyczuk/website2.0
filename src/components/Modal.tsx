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

const rows = [
  createData('Canada', 1000, 'South'),
];

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [allCountries, setAllCountries] = useState<{ label: string }[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/mledoze/countries/master/dist/countries.json');
        const countryData = await response.json();
        const countryOptions = countryData.map((country: any) => ({ label: country.name.common }));
        setAllCountries(countryOptions);
      } catch (error) {
        console.error('Error fetching the countries: ', error);
      }
    };

    if (isOpen) {
      fetchCountries();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <Autocomplete
          id="country-select-demo"
          sx={{ width: 300, backgroundColor: 'white' }}
          options={allCountries}
          autoHighlight
          getOptionLabel={(option) => option.label}
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
