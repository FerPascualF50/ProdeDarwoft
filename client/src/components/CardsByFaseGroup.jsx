import Box from '@mui/material/Box';
import CardMatch from './CardMatch';

const CardsByFaseGroup = ({ matches }) => {
  return (
    <Box>
      {matches.map((match, index) => (
        <CardMatch key={index} match={match} />
      ))}
    </Box>
  );
};

export default CardsByFaseGroup;