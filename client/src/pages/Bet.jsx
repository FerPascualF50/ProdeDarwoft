// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { setUser } from '../store/loginGoogleSlice';
// import { Box, Typography } from '@mui/material';
// import CardBet from '../components/bet/CartBet';

// const Bet = () => {
//   const dispatch = useDispatch()

//   useEffect(() => {
//     const hash = window.location.hash.substring(1);
//     if (hash) {
//       try {
//         const { userData, access_token } = JSON.parse(decodeURIComponent(hash));
//         localStorage.setItem('access_token', access_token);
//         dispatch(setUser(userData))
//         window.location.hash = '';
//       } catch (error) {
//         console.error('Error parsing userData and access_token:', error);
//       }
//     }
//   }, []);


//   const mockMatches = [
//     {
//       id: 1, countries: [
//         { code: 'US', name: 'EE.UU' },
//         { code: 'BR', name: 'Brasil' }
//       ]
//     },
//     {
//       id: 2, countries: [
//         { code: 'FR', name: 'Francia' },
//         { code: 'AR', name: 'Argentina' }
//       ]
//     },
//   ];

//   return (
//     <Box sx={{marginBottom: "80px", marginTop: '24px'}} >
//       <Box sx={{ textAlign: 'center' }}>
//         <Typography variant="h5" gutterBottom>Fase de Grupos</Typography>
//       </Box>
//       <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//         <Box sx={{ maxWidth: 640 }}>
//           {mockMatches.map((match) => (
//             <Box key={match.id} sx={{ marginBottom: 0.5 }}>
//               <CardBet country1={match.countries[0]} country2={match.countries[1]} />
//             </Box>
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Bet;

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getmatches } from '../store/matchSlice';
import { Box, Typography } from '@mui/material';
import CardsBetByFaseGroup from '../components/bet/CardsBetByFaseGroup';
import CardsBetByFourthGroup from '../components/bet/CardsBetByFourthGroup';
import CardsBetBySemifinals from '../components/bet/CardsBetBySemifinals';
import CardsBetBy3rdRank from '../components/bet/CardsBetBy3rdRank';
import CardBetByFinal from '../components/bet/CardBetByFinal';

const Bet = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      try {
        const { userData, access_token } = JSON.parse(decodeURIComponent(hash));
        localStorage.setItem('access_token', access_token);
        dispatch(setUser(userData))
        window.location.hash = '';
      } catch (error) {
        console.error('Error parsing userData and access_token:', error);
      }
    }
  }, []);

  useEffect(() => {
    dispatch(getmatches());
  }, [dispatch]);

  const { matches } = useSelector((state) => state.match);



  const faseGroupMatches = matches.filter(match => match.group.startsWith('Grupo'));
  const fourthGroupMatches = matches.filter(match => match.group === 'Cuartos de Final');
  const semifinalsMatches = matches.filter(match => match.group === 'Semifinal');
  const thirdRankMatch = matches.find(match => match.group === '3er Puesto');
  const finalMatch = matches.find(match => match.group === 'Final');

  return (

    <Box sx={{ marginBottom: "80px", marginTop: '24px' }} >
      <Typography variant="h5" color={'secondary.main'} sx={{ display:'flex', justifyContent:'center'}}>Mi Apuesta</Typography>
      <Box sx={{ marginBottom: "24px", textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>Partidos de Grupo</Typography>
        <CardsBetByFaseGroup matches={faseGroupMatches} />
      </Box>
      <Box sx={{ marginBottom: "24px", textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>Partidos 4tos de Final</Typography>
        <CardsBetByFourthGroup matches={fourthGroupMatches} />
      </Box>
      <Box sx={{ marginBottom: "24px", textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>Partidos de Semifinales</Typography>
        <CardsBetBySemifinals matches={semifinalsMatches} />
      </Box>
      {thirdRankMatch && (
        <Box sx={{ marginBottom: "24px", textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>Partido 3er Puesto</Typography>
          <CardsBetBy3rdRank match={thirdRankMatch} />
        </Box>
      )}
      {finalMatch && (
        <Box sx={{ marginBottom: "24px", textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom> La Final</Typography>
          <CardBetByFinal match={finalMatch} />
        </Box>
      )}
    </Box>
  );
};

export default Bet;