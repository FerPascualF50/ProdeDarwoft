import { AppBar, Box, CssBaseline, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemText, Toolbar, Typography, Avatar, Tooltip, ListItemButton } from '@mui/material';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';
import { navItemsAdmin, navItemsUser } from '../utils/navItems';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import logoDarwoft from '../assets/logo.svg';
import logoCopaAmerica from '../assets/logoCopaAmerica.png';

const drawerWidth = 160;

const DrawerAppBar = (props) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isLoggedIn = localStorage.getItem('access_token');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLogout = async () => {
    navigate('/');
  };

  const navItemsToRender = isLoggedIn ?
    (user && user.rol === 'admin' ? navItemsAdmin : navItemsUser) :
    navItemsUser.filter(item => item.name !== 'LOGOUT');

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', anchor: 'right' }}>
      <Typography variant="h6" sx={{ my: 2 }}>Menu</Typography>
      <Divider />
      <List>
        {navItemsToRender.map((item) => (
          <ListItem disableGutters key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleNavItemClicked(item)}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const handleNavItemClicked = (item) => {
    if (item.route === '/logout') {
      handleLogout();
    } else {
      navigate(item.route);
    }
  };

  const { window } = props;
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ height: '64px', display: 'flex', justifyContent: 'center', backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', boxShadow: 'none' }} >
        <Toolbar sx={{ justifyContent: 'space-between', width: '100%' }}>
          <Grid container alignItems="center">
            <Grid item xs={12} md={12}>
              <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={3} md={3}>
                  <Box component="img" src={logoDarwoft} alt="Logo" sx={{ height: '50px', width: '50px', display: 'block' }} />
                </Grid>
                <Grid item xs={3} md={3}>
                  <Typography color='primary' variant="h5" sx={{ mx: 2, display: 'flex', justifyContent: 'center', fontSize: '1.8rem' }}>Prode</Typography>
                </Grid>
                <Grid item xs={3} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Box component="img" src={logoCopaAmerica} alt="LogoCopaAmerica" sx={{ height: '50px', width: '50px', aspectRatio: '1 / 1', flexShrink: 0 }} />
                </Grid>
                <Grid item xs={3} md={3} display="flex" justifyContent="flex-end" sx={{ maxWidth: '40px' }}>
                  <IconButton aria-label="open drawer" edge="end" onClick={handleDrawerToggle} sx={{ color: '#43414B' }}>
                    <MenuIcon sx={{ display: 'flex', }} />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{ keepMounted: true }} anchor="right" sx={{ '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, }, }}>
          {drawer}
        </Drawer>
      </nav>
      <Box>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;