import { Card, CardContent, Typography, Divider, Box, Avatar } from '@mui/material';

const CardMatch = ({ match }) => {
  const { localCountry, visitorCountry, date, group } = match;
  const matchDate = new Date(date);
  const formattedDate = matchDate.toLocaleDateString();
  const formattedTime = matchDate.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', paddingLeft: '16px', paddingRight: '16px' }}>
      <Card variant="outlined" sx={{ marginBottom: '20px', maxWidth: '550px', width: '100%' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body1" component="span" sx={{ marginRight: '5px', flex: '1' }}>
                {localCountry?.id?.name}
              </Typography>
              <Typography variant="body1" component="span" >
                vs
              </Typography>
              <Typography variant="body1" component="span" sx={{ marginLeft: '5px', marginRight: '5px', flex: '1', textAlign: 'right' }}>
                {visitorCountry?.id?.name}
              </Typography>
            </Box>
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
              <Avatar src={localCountry?.id?.flag} alt={localCountry?.id?.name} sx={{ width: '30px', height: '30px', marginRight: '10px' }} />
              <Typography variant="body1" component="span" sx={{ marginLeft: '10px', marginRight: '10px', fontWeight: 'bold' }}>
                {localCountry?.goals?.goalsGame}
              </Typography>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ marginX: '10px' }} />
            <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
              <Typography variant="body1" component="span" sx={{ marginLeft: '10px', marginRight: '10px', fontWeight: 'bold' }}>
                {visitorCountry?.goals?.goalsGame}
              </Typography>
              <Avatar src={visitorCountry?.id?.flag} alt={visitorCountry?.id?.name} sx={{ width: '30px', height: '30px', marginLeft: '10px' }} />
            </Box>
          </Box>
          <Typography variant="body2" sx={{ marginTop: '10px', textAlign: 'center', fontWeight: 'bold' }}>
            Fecha: {formattedDate} - {formattedTime} hs. - {group}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardMatch;