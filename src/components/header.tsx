import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
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

          <Box className="header-nav">
            {['Home', 'About', 'Contact', 'Login'].map((page) => (
              <Button
                key={page}
                component={Link}
                to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
                className="header-nav-button"
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;