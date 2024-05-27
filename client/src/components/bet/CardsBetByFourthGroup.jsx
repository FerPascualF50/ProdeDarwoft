import CardBet from './CardBet';

const CardsBetByFourthGroup = ({ matches }) => {
  return (
    <>
      {matches.map((match, index) => (
        <CardBet key={index} match={match} />
      ))}
    </>
  );
};

export default CardsBetByFourthGroup;