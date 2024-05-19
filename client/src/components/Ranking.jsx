import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, List,  ListItem, ListItemText, Stack, Box, } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const UserAccordion = ({ user, expanded, onChange }) => (
  <Accordion  expanded={expanded}  onChange={onChange} 
    sx={{ maxWidth: 650,  width: '100%',  margin: 'auto', marginBottom: expanded ? '2px' : '2px', }}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography sx={{ flexGrow: 1 }}>
        {user.firstName} {user.lastName}
      </Typography>
      <Typography>Ptos: {user.totalPoints}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <List>
        {user.matches.map(match => (
          <ListItem key={match.id}>
            <ListItemText primary={`${match.name}: ${match.points} puntos`} />
          </ListItem>
        ))}
      </List>
    </AccordionDetails>
  </Accordion>
);

const UserAccordionList = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  const users = [
    {
      id: 1,
      firstName: 'Caro',
      lastName: 'Luna',
      totalPoints: 110,
      matches: [
        { id: 1, name: 'Argentina - Canadá', points: 55 },
        { id: 2, name: 'Perú - Chile', points: 55 },
      ],
    },
    {
      id: 2,
      firstName: 'Seba',
      lastName: 'Mondino',
      totalPoints: 110,
      matches: [
        { id: 1, name: 'Argentina - Canadá', points: 55 },
        { id: 2, name: 'Perú - Chile', points: 55 },
      ],
    },
    {
      id: 3,
      firstName: 'Waldemar ',
      lastName: 'Krumrick',
      totalPoints: 110,
      matches: [
        { id: 1, name: 'Argentina - Canadá', points: 55 },
        { id: 2, name: 'Perú - Chile', points: 55 },
      ],
    },
    {
      id: 4,
      firstName: 'Cristian',
      lastName: 'Bullokles',
      totalPoints: 110,
      matches: [
        { id: 1, name: 'Argentina - Canadá', points: 55 },
        { id: 2, name: 'Perú - Chile', points: 55 },
      ],
    },
    {
      id: 5,
      firstName: 'Cecilia',
      lastName: 'Mariani',
      totalPoints: 110,
      matches: [
        { id: 1, name: 'Argentina - Canadá', points: 55 },
        { id: 2, name: 'Perú - Chile', points: 55 },
      ],
    },
    {
      id: 6,
      firstName: 'Silvia',
      lastName: 'Leiva',
      totalPoints: 110,
      matches: [
        { id: 1, name: 'Argentina - Canadá', points: 55 },
        { id: 2, name: 'Perú - Chile', points: 55 },
      ],
    },
    {
      id: 7,
      firstName: 'Agustina',
      lastName: 'Edmé',
      totalPoints: 110,
      matches: [
        { id: 1, name: 'Argentina - Canadá', points: 55 },
        { id: 2, name: 'Perú - Chile', points: 55 },
      ],
    },
    {
      id: 8,
      firstName: 'Emanuel',
      lastName: 'Balcazar',
      totalPoints: 110,
      matches: [
        { id: 1, name: 'Argentina - Canadá', points: 55 },
        { id: 2, name: 'Perú - Chile', points: 55 },
      ],
    },
    {
      id: 9,
      firstName: 'Victoria',
      lastName: 'Pizarro',
      totalPoints: 110,
      matches: [
        { id: 1, name: 'Argentina - Canadá', points: 55 },
        { id: 2, name: 'Perú - Chile', points: 55 },
      ],
    },
    {
      id: 10,
      firstName: 'Horacio',
      lastName: 'Perulero',
      totalPoints: 110,
      matches: [
        { id: 1, name: 'Argentina - Canadá', points: 55 },
        { id: 2, name: 'Perú - Chile', points: 55 },
      ],
    },
    {
      id: 11,
      firstName: 'Carla',
      lastName: 'Damario',
      totalPoints: 110,
      matches: [
        { id: 1, name: 'Argentina - Canadá', points: 55 },
        { id: 2, name: 'Perú - Chile', points: 55 },
      ],
    },

   
  ];

  return (
    <Box sx={{ margin: '0 16px', marginBottom: 60, marginTop: 4 }}>
      <Stack direction="column" alignItems="center" spacing={0}>
        {users.map(user => (
          <UserAccordion
            key={user.id}
            user={user}
            expanded={expanded === user.id}
            onChange={handleChange(user.id)}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default UserAccordionList;