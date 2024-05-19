import CardMatch from './CardMatch';

const CardsByFourthGroup = ({ matches }) => {
  return (
    <>
      {matches.map((match, index) => (
        <CardMatch key={index} match={match} />
      ))}
    </>
  );
};

export default CardsByFourthGroup;