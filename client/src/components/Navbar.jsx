import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography, Avatar, Tooltip, ListItemButton } from '@mui/material';
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

function DrawerAppBar(props) {
  const navigate = useNavigate();
  const theme = useTheme();
  const isLoggedIn = localStorage.getItem('access_token');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLogout = async () => {
    // Aquí puedes realizar cualquier acción necesaria antes de hacer logout
    navigate('/');
  };

  const navItemsToRender = isLoggedIn ? 
    (user && user.rol === 'admin' ? navItemsAdmin : navItemsUser) :
    navItemsUser.filter(item => item.name !== 'LOGOUT'); // Si no está logueado, excluimos la opción de logout

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', anchor: 'right' }}>
      <Typography variant="h6" sx={{ my: 2 }}>Menu</Typography>
      <Divider />
      <List>
        {navItemsToRender.map((item) => (
          <ListItem disableGutters key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleNavItemClicked(item)}>
              <ListItemText primary={item.name}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const handleNavItemClicked = (item) => {
    // Aquí puedes manejar el evento de hacer clic en un elemento del menú
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
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box component={container} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <Box component="img" src={logoDarwoft} alt="Logo" fill="#43414B" sx={{ marginLeft:'0px', height: '50px', width: '50px', display: 'block', '& svg': { fill: '#43414B' } }} />
              <Typography color='primary' variant="h5" fontFamily='Lato, sans-serif' sx={{ marginLeft:'6%', marginRight:'9%'  }}>Prode</Typography>
              <Box component="img" src={logoCopaAmerica} alt="LogoCopaAmerica" sx={{ marginRight:'33%', width: '110px', aspectRatio: '10 / 3', flexShrink: 0, '& svg': { fill: '#43414B' } }} />
            </Box>
            <Box>
              {/* {isLoggedIn && (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Tooltip title="Cerrar sesión">
                    <IconButton onClick={handleLogout} sx={{ color: '#fff' }}>
                      <LogoutIcon />
                    </IconButton>
                  </Tooltip>
                  <Avatar alt="User Avatar" src="/path/to/avatar.jpg" />
                </div>
              )}
              {!isLoggedIn && (
                <IconButton aria-label="login" onClick={() => navigate('/login')} sx={{ color: '#fff' }}>
                  <Typography variant="body1" sx={{ color: '#fff' }}>Login</Typography>
                </IconButton>
              )} */}
              <IconButton aria-label="open drawer" edge="end" onClick={handleDrawerToggle} sx={{ color: '#43414B' }} >
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{ keepMounted: true }} anchor="right" sx={{ '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, }, }}
        // container={container}
        >{drawer}
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
