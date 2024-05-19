import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, List,  ListItem, ListItemText, Stack, Box, } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const UserAccordion = ({ user, expanded, onChange }) => (
  <Accordion  expanded={expanded}  onChange={onChange} 
    sx={{ maxWidth: 650,  width: '100%',  margin: 'auto', marginBottom: expanded ? '2px' : '2px', }} D>
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
      firstName: 'John',
      lastName: 'Doe',
      totalPoints: 100,
      matches: [
        { id: 1, name: 'Match 1', points: 30 },
        { id: 2, name: 'Match 2', points: 70 },
      ],
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      totalPoints: 85,
      matches: [
        { id: 1, name: 'Match 1', points: 40 },
        { id: 2, name: 'Match 2', points: 45 },
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