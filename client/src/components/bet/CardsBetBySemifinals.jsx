import Box from '@mui/material/Box';
import CardBet from './CardBet';

const CardsBetBySemifinals = ({ matches }) => {
  return (
    <Box>
      {matches.map((match, index) => (
        <CardBet key={index} match={match} />
      ))}
    </Box>
  );
};

export default CardsBetBySemifinals;