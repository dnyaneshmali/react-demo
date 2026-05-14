import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authService } from '../services/auth.service';
import './Header.css';

const Header = () => {
  const location = useLocation(); // To trigger re-render on route change
  const navigate = useNavigate();
  const isLoggedIn = authService.isLoggedIn();

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  const loggedOutMenu = ['Home', 'About', 'Contact', 'Login'];
  const loggedInMenu = [
    { label: 'Command Center', path: '/dashboard' },
    { label: 'Agents', path: '/agents' },
    { label: 'Neural Models', path: '/models' }
  ];

  return (
    <AppBar position="sticky" className="header-appbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            className="header-logo"
          >
            NEX<span className="header-logo-accent">US</span>
          </Typography>

          <Box className="header-nav" sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
            {!isLoggedIn ? (
              loggedOutMenu.map((page) => (
                <Button
                  key={page}
                  component={Link}
                  to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
                  className="header-nav-button"
                >
                  {page}
                </Button>
              ))
            ) : (
              <>
                {loggedInMenu.map((item) => (
                  <Button
                    key={item.label}
                    component={Link}
                    to={item.path}
                    className="header-nav-button"
                  >
                    {item.label}
                  </Button>
                ))}
                <Button
                  onClick={handleLogout}
                  className="header-nav-button logout-button"
                  style={{ color: '#ff4d4d', border: '1px solid rgba(255, 77, 77, 0.3)', marginLeft: '16px' }}
                >
                  Logout
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;