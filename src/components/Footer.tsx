import { Box, Container } from '@mui/material';

const Footer = () => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      pb: 6,
      pt: {
        md: 15,
        xs: 6,
      },
    }}
  >
    <Container maxWidth="lg">Footer</Container>
  </Box>
);

export default Footer;
