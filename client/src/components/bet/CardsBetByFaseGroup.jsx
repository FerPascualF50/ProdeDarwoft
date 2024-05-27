import Box from '@mui/material/Box';
import CardBet from './CardBet';

const CardsBetByFaseGroup = ({ matches }) => {
  return (
    <Box>
      {matches.map((match, index) => (
        <CardBet key={index} match={match} />
      ))}
    </Box>
  );
};

export default CardsBetByFaseGroup;