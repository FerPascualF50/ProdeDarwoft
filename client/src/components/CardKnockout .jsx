import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Card, CardContent, Box, Avatar } from '@mui/material';

const CardKnockout = ({ gameId }) => {
  const gameData = useSelector((state) => state.match.matches.find(match => match._id === gameId));
  if (!gameData) return null;

  const { date, localScore, visitorScore } = gameData;
  const matchDate = new Date(date);
  const formattedDate = matchDate.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const formattedTime = matchDate.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });

  return (
    <Card sx={{ maxWidth: 220, height: 110, margin: 'auto', marginBottom: '16px' }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0', padding: '6px 12px 0 12px' }}>
        <Typography variant="body1" gutterBottom sx={{ marginTop: 0, fontSize:'0.8rem'}}>
          {formattedDate} - {formattedTime} hs.
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src={gameData.localCountry.id.flag} alt="Local Flag" sx={{ width: 30, height: 30, marginRight: 1 }} />
            <Typography variant="body2" sx={{fontSize:'1rem'}}>{gameData.localCountry.id.name}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Typography variant="body2">{gameData.localCountry.goals.goalsGame}</Typography>
            <Typography variant="body2" sx={{ marginLeft: 2 }}>{`(${gameData.localCountry.goals.goalsPenalty})`}</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src={gameData.visitorCountry.id.flag} alt="Visitor Flag" sx={{ width: 30, height: 30, marginRight: 1 }} />
            <Typography variant="body2" sx={{fontSize:'1rem'}}>{gameData.visitorCountry.id.name}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Typography variant="body2">{gameData.visitorCountry.goals.goalsGame}</Typography>
            <Typography variant="body2" sx={{ marginLeft: 2 }}>{`(${gameData.visitorCountry.goals.goalsPenalty})`}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardKnockout;
