import { useEffect } from 'react';
import { Table, TableBody, Typography, TableHead, TableRow, Paper, CardContent, Box } from '@mui/material';
import { CustomCard, CustomTableContainer, SmallCell, CountryCell, HeaderCell, CountryHeaderCell } from '../components/styles/CardGroups.styles';
import { useDispatch } from 'react-redux';
import { getCountries } from '../store/countrySlice';

const CardGroups = ({ group, countries }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
      <CustomCard sx={{ maxWidth: 752, width: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: 1, padding:'8px' }}>
          <Typography variant="h6" sx={{ textAlign: 'center', mb: 1, fontSize: '1rem' }}> Grupo {group} </Typography>
          <CustomTableContainer component={Paper}>
            <Table>
              <TableHead >
                <TableRow >
                  <CountryHeaderCell>País</CountryHeaderCell>
                  <HeaderCell>Ptos</HeaderCell>
                  <HeaderCell>PJ</HeaderCell>
                  <HeaderCell>G</HeaderCell>
                  <HeaderCell>E</HeaderCell>
                  <HeaderCell>P</HeaderCell>
                  <HeaderCell>GF</HeaderCell>
                  <HeaderCell>GE</HeaderCell>
                </TableRow>
              </TableHead>
              <TableBody >
                {countries.map((row) => (
                  <TableRow key={row._id}>
                    <CountryCell component="th" scope="row" sx={{ height: '42px', display: 'flex', alignItems: 'center' }}>
                      {row.flag && <img src={row.flag} alt="Flag" style={{ marginRight: '8px', width: '24px' }} />}
                      {row.name}
                    </CountryCell>
                    <SmallCell sx={{ fontWeight: 'bold' }}>{row.points}</SmallCell>
                    <SmallCell>{row.playedMatches}</SmallCell>
                    <SmallCell>{row.wonMatches}</SmallCell>
                    <SmallCell>{row.tiedMatches}</SmallCell>
                    <SmallCell>{row.tiedMatches}</SmallCell>
                    <SmallCell>{row.goals}</SmallCell>
                    <SmallCell>{row.goalsAgainst}</SmallCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CustomTableContainer>
        </CardContent>
      </CustomCard>
    </Box>
  );
};

export default CardGroups;