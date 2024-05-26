import CssBaseline from '@mui/material/CssBaseline';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#f3f3f3', maxHeight: '68px' }} >
      <CssBaseline />
      <Container maxWidth="sm">
        <Box component="footer" sx={{ py: 3, px: 2 }}>
          <Typography align="center">Prode DARWOFT Copa America 2024</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;