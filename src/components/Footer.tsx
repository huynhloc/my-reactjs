import { Box, Container } from '@mui/material';

const Footer = () => (
  <Box
    sx={{
      backgroundColor: '#1E1A34',
    }}
  >
    <Container maxWidth="xl">
      <Box
        sx={{ paddingY: 6, display: 'flex', justifyContent: 'space-between' }}
      >
        <Box display="flex">
          <img alt="ecampus" src="/static/logo-light.svg" />
          <Box
            sx={{
              ml: 7,
              width: '42%',
              fontSize: '14px',
              lineHeight: '20px',
              color: '#C7C6CC',
            }}
          >
            eCampusOntario is a not-for-profit centre of excellence and global
            leader in the evolution of teaching and learning through technology.
          </Box>
        </Box>
        <img alt="ecampus" src="/static/logo-ontario.svg" />
      </Box>
    </Container>
    <Box
      sx={{
        border: '1px solid #565367',
      }}
    />
    <Container maxWidth="xl">
      <Box
        sx={{
          paddingY: 4,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            fontSize: '14px',
            lineHeight: '20px',
            color: '#8E8C99',
          }}
        >
          Copyright © 2022. eCampus MicroCredentials. All rights reserved.
        </Box>
        <Box
          sx={{
            fontSize: '14px',
            lineHeight: '20px',
            color: '#C7C6CC',
          }}
        >
          Privacy Policy
        </Box>
      </Box>
    </Container>
  </Box>
);

export default Footer;
