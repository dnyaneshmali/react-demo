import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import './Footer.css';

const Footer = () => {
  return (
    <Box
      component="footer"
      className="footer-container"
    >
      <Container maxWidth="lg">
        <Box className="footer-content">
          <Typography variant="body1" className="footer-title">
            React Demo Application
          </Typography>
          <Typography variant="body2" align="center" className="footer-copyright">
            {'Copyright © '}
            <Link color="inherit" href="#" className="footer-link">
              React Demo
            </Link>{' '}
            {new Date().getFullYear()}
            {'. All rights reserved.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;