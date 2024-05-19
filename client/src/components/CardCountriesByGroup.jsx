import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import CardGroups from './CardGroups';

const CardCountriesByGroup = () => {
  const { groupedCountries } = useSelector((state) => state.country);

  return (
    <Box sx={{ marginBottom: '60px' }}> 
      {Object.entries(groupedCountries).map(([group, countries]) => (
        <CardGroups key={group} group={group} countries={countries.slice(0, 4)} />
      ))}
    </Box>
  );
};

export default CardCountriesByGroup;