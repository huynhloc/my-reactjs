import { Link as RouterLink, matchPath, useLocation } from 'react-router-dom';
import { AppBar, Box, Divider, Toolbar, Link, Button } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import LanguagePopover from './LanguagePopover';
import NavItem from './NavItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      height: 34,
      marginRight: 20,
    },
  })
);

const navItems = [
  { text: 'About', pathname: '/about' },
  { text: 'Impact', pathname: '/impact' },
  { text: 'How it Works', pathname: '/howitworks' },
  { text: 'Funding', pathname: '/funding' },
  { text: 'Testimonials', pathname: '/testimonials' },
];

const MainNavbar = () => {
  const location = useLocation();
  const classes = useStyles();
  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.primary',
      }}
    >
      <Toolbar sx={{ height: 80 }}>
        <Link component={RouterLink} to="/" sx={{ lineHeight: 1 }}>
          <img alt="ecampus" src="/static/logo.svg" className={classes.logo} />
        </Link>
        <img
          alt="ecampus"
          src="/static/central-virtual.svg"
          className={classes.logo}
        />
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexGrow: 1,
            marginX: 1,
          }}
        >
          {navItems.map((item) => (
            <NavItem
              key={item.pathname}
              pathname={item.pathname}
              active={
                !!matchPath(
                  {
                    path: item.pathname,
                  },
                  location.pathname
                )
              }
            >
              {item.text}
            </NavItem>
          ))}
        </Box>
        <LanguagePopover />
        <Button
          sx={{
            textTransform: 'none',
            paddingX: '16px',
            marginRight: 1,
          }}
          variant="text"
          color="secondary"
          component={RouterLink}
          to={'/login'}
        >
          Login
        </Button>
        <Button
          sx={{
            textTransform: 'none',
            paddingX: '27px',
          }}
          disableElevation
          variant="contained"
          color="primary"
          component={RouterLink}
          to={'/join'}
        >
          Join
        </Button>
      </Toolbar>
      <Divider />
    </AppBar>
  );
};
export default MainNavbar;
