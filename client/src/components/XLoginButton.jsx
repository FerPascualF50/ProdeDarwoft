import { Box, Button, CircularProgress, Typography } from '@mui/material';
import XIcon from '@mui/icons-material/X';

const TwitterLoginButton = ({ onClick, loading }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', pt:2 }}>
      <Button
        fullWidth
        onClick={onClick}
        disabled={loading}
        variant="outlined"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent:'left',
          gap: 2,
          borderRadius: '4px',
          borderColor: '#cbd5e0',
          color: '#4a5568',
          height: '56px',
          '&:hover': {
            borderColor: '#4a5568',
            color: '#2d3748',
            boxShadow: 'rgba(9, 30, 66, 0.25) 0px 8px 16px -4px, rgba(9, 30, 66, 0.3) 0px 6px 16px 0px, rgba(9, 30, 66, 0.12) 0px 2px 6px 0px',
          }
        }}
      >
        <XIcon />
        <Typography>Ingresar con X</Typography>
      </Button>
      {loading && <CircularProgress size={24} sx={{ color: '#ff5722', position: 'absolute' }} />}
    </Box>
  );
}

export default TwitterLoginButton;
