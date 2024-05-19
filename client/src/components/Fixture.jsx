import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getmatches } from '../store/matchSlice';
import { Box, Typography } from '@mui/material';
import CardsByFaseGroup from './CardsByFaseGroup';
import CardsByFourthGroup from './CardsByFourthGroup';
import CardBySemifinals from './CardBySemifinals';
import CardBy3rdRank from './CardBy3rdRank';
import CardByFinal from './CardByFinal';

const Fixture = () => {
  const dispatch = useDispatch();
  const { matches } = useSelector((state) => state.match);

  useEffect(() => {
    dispatch(getmatches());
  }, [dispatch]);

  const faseGroupMatches = matches.filter(match => match.group.startsWith('Grupo'));
  const fourthGroupMatches = matches.filter(match => match.group === 'Cuartos de Final');
  const semifinalsMatches = matches.filter(match => match.group === 'Semifinal');
  const thirdRankMatch = matches.find(match => match.group === '3er Puesto');
  const finalMatch = matches.find(match => match.group === 'Final');

  return (
    <Box sx={{ marginBottom: "80px", marginTop: '24px' }} >
      <Box sx={{ marginBottom: "24px", textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>Fase de Grupos</Typography>
        <CardsByFaseGroup matches={faseGroupMatches} />
      </Box>
      <Box sx={{ marginBottom: "24px", textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>Cuartos de Final</Typography>
        <CardsByFourthGroup matches={fourthGroupMatches} />
      </Box>
      <Box sx={{ marginBottom: "24px", textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>Semifinales</Typography>
        <CardBySemifinals matches={semifinalsMatches} />
      </Box>
      {thirdRankMatch && (
        <Box sx={{ marginBottom: "24px", textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>3er Puesto</Typography>
          <CardBy3rdRank match={thirdRankMatch} />
        </Box>
      )}
      {finalMatch && (
        <Box sx={{ marginBottom: "24px", textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>Final</Typography>
          <CardByFinal match={finalMatch} />
        </Box>
      )}
    </Box>
  );
};

export default Fixture;