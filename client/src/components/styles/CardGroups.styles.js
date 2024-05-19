import { styled } from '@mui/material/styles';
import { TableCell, TableContainer, Card } from '@mui/material';

export const SmallCell = styled(TableCell)(({ theme }) => ({
  padding: '4px 8px',
  textAlign: 'right',
  width: '50px',
  fontSize: '0.875rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.625rem',
  },
}));

export const CountryCell = styled(TableCell)(({ theme }) => ({
  padding: '4px 8px',
  textAlign: 'left',
  fontSize: '0.875rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.70rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.625rem',
  },
}));

export const HeaderCell = styled(TableCell)(({ theme }) => ({
  padding: '4px 8px',
  textAlign: 'right',
  fontWeight: 'bold',
  fontSize: '0.875rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.7rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.625rem',
  },
}));

export const CountryHeaderCell = styled(TableCell)(({ theme }) => ({
  padding: '4px 8px',
  textAlign: 'left',
  fontWeight: 'bold',
  fontSize: '0.875rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.625rem',
  },
}));

export const CustomTableContainer = styled(TableContainer)`
  box-shadow: none; 
`;

export const CustomCard = styled(Card)`
  box-shadow: none; 
`;