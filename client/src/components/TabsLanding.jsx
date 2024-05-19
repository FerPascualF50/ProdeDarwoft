import { Box, Tabs, Tab } from '@mui/material';
import Fixture from './Fixture';
import Positions from './Positions';
import Ranking from './Ranking'
import { useState } from 'react';


const TabsLanding = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered sx={{ paddingTop: '16px', '& .MuiTabs-indicator': { backgroundColor: 'secondary.main' } }}>
        <Tab label="FIXTURE" />
        <Tab label="POSICIONES" />
        <Tab label="RANKING" />
      </Tabs>
      <Box>
        {value === 0 && <Fixture />}
        {value === 1 && <Positions />}
        {value === 2 && <Ranking />}
      </Box>
    </Box>
  );
}

export default TabsLanding;