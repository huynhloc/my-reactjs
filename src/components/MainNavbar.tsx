import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Box, Divider, Toolbar } from '@mui/material';
import LanguagePopover from './LanguagePopover';

const MainNavbar = () => {
  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.secondary',
      }}
    >
      <Toolbar sx={{ minHeight: 64 }}>
        <RouterLink to="/">Logo Here</RouterLink>
        <Box sx={{ flexGrow: 1, ml: 2 }} />
        <LanguagePopover />
        <Box
          sx={{
            mx: 1,
            alignItems: 'center',
            display: 'flex',
          }}
        >
          Menu2
        </Box>
        <Box
          sx={{
            mx: 1,
            alignItems: 'center',
            display: 'flex',
          }}
        >
          Menu1
        </Box>
      </Toolbar>
      <Divider />
    </AppBar>
  );
};
export default MainNavbar;
