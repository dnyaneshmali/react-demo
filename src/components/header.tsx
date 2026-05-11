import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import './Header.css';

const Header = () => {
  return (
    <AppBar position="sticky" className="header-appbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            className="header-logo"
          >
            REACT<span className="header-logo-accent">DEMO</span>
          </Typography>

          <Box className="header-nav">
            {['Home', 'About', 'Services', 'Contact'].map((page) => (
              <Button
                key={page}
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