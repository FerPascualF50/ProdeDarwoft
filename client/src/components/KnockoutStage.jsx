import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getmatches } from '../store/matchSlice';
import { Box, Typography, Grid } from '@mui/material';
import CardKnockout from './CardKnockout ';

const renderMatchesColumn = (matches, title) => (
  <Grid item xs={12} md={4}>
    <Typography variant="h6" gutterBottom textAlign="center">
      {title}
    </Typography>
    {matches.map(match => (
      <CardKnockout key={match._id} gameId={match._id} />
    ))}
  </Grid>
);

const KnockoutStage = () => {
  const dispatch = useDispatch();
  const { matches } = useSelector(state => state.match);

  useEffect(() => {
    dispatch(getmatches());
  }, [dispatch]);

  const quarterFinalsMatches = matches.filter(match => match.group === 'Cuartos de Final');
  const semifinalsMatches = matches.filter(match => match.group === 'Semifinal');
  const finalMatch = matches.find(match => match.group === 'Final');

  return (
    <Box sx={{ marginBottom: '80px', marginTop: '24px', paddingBottom: '60px' }}>
      <Grid container spacing={2} justifyContent="center">
        {renderMatchesColumn(quarterFinalsMatches, 'Cuartos de Final')}
        {renderMatchesColumn(semifinalsMatches, 'Semifinales')}
        {finalMatch && renderMatchesColumn([finalMatch], 'Final')}
      </Grid>
    </Box>
  );
};

export default KnockoutStage;