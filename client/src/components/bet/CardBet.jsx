// import { useState } from 'react';
// import { Card, CardContent, Typography, Avatar, Input, Divider, Box } from '@mui/material';

// const CardBet = ({ country1, country2 }) => {
//   const [goalsCountry1, setGoalsCountry1] = useState(0);
//   const [goalsCountry2, setGoalsCountry2] = useState(0);

//   return (
//     <Card sx={{ height: 48}}>
//       <CardContent sx={{ padding: 1 }}>
//         <Box style={{ display: 'flex', alignItems: 'center' }}>
//           <Avatar sx={{ width: 30, height: 30 }}>{country1.code}</Avatar>
//           <Typography variant="subtitle1" sx={{ fontSize: 14, marginLeft: 1 }}>{country1.name}</Typography>
//           <Input
//             type="number"
//             value={goalsCountry1}
//             onChange={(e) => setGoalsCountry1(e.target.value)}
//             style={{ marginLeft: 'auto', marginRight: 4, width: 16, textAlign: 'center' }}
//           />
//           <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 4, marginRight: 4 }}>
//             <Divider orientation="vertical" flexItem />
//           </Box>
//           <Input
//             type="number"
//             value={goalsCountry2}
//             onChange={(e) => setGoalsCountry2(e.target.value)}
//             style={{ marginLeft: 4, marginRight: 'auto', width: 16, textAlign: 'center' }}
//           />
//           <Typography variant="subtitle1" sx={{ fontSize: 14, marginRight: 1 }}>{country2.name}</Typography>
//           <Avatar sx={{ width: 30, height: 30 }}>{country2.code}</Avatar>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

// export default CardBet;

import { Card, CardContent, Typography, Box, Avatar, Input } from '@mui/material';

const CardBet = ({ match }) => {
  const { localCountry, visitorCountry } = match;

  return (
    <Box sx={{ display: 'flex', paddingLeft: '12px', paddingRight: '12px', paddingBottom: '0px', justifyContent:'center' }}>
    <Card variant="outlined" sx={{ width: '100%', maxWidth: '550px', height:'40px'}}>
      <CardContent sx={{padding:'4px'}}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <Avatar src={localCountry?.id?.flag} alt={localCountry?.id?.name} sx={{ width: '30px', height: '30px', marginRight: '4px' }} />
          <Typography variant="body1" component="span" sx={{ marginRight: '4px', flex: '1' }}>
            {localCountry?.id?.name}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Input type="number"
                value={localCountry?.goals?.goalsGame} sx={{ marginLeft: '10px', marginRight: '10px', fontWeight: 'bold', maxWidth:'20px' }}>
              {localCountry?.goals?.goalsGame}
            </Input>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Input variant="body1" component="span" sx={{ marginLeft: '10px', marginRight: '10px', fontWeight: 'bold', maxWidth:'20px'}}>
              {visitorCountry?.goals?.goalsGame}
            </Input>
          </Box>
          <Typography type="number"
                value={visitorCountry?.goals?.goalsGame} sx={{ marginLeft: '4px', flex: '1' }}>
            {visitorCountry?.id?.name}
          </Typography>
          <Avatar src={visitorCountry?.id?.flag} alt={visitorCountry?.id?.name} sx={{ width: '30px', height: '30px', marginLeft: '4px' }} />
        </Box>
      </CardContent>
    </Card>
  </Box>
  );
};

export default CardBet;