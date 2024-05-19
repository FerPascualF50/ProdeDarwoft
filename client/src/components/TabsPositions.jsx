import { Box, Tabs, Tab } from '@mui/material';
import GroupStage from './GroupStage';
import KnockoutStage from './KnockoutStage';
import { useState } from 'react';


const TabsPositions = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered sx={{ paddingTop: '16px', '& .MuiTabs-indicator': { backgroundColor: 'secondary.main' } }}>
        <Tab label="FASE GRUPO" />
        <Tab label="FASE ELIMINACION" />
      </Tabs>
      <Box>
        {value === 0 && <GroupStage />}
        {value === 1 && <KnockoutStage />}
      </Box>
    </Box>
  );
}

export default TabsPositions;