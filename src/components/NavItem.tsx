import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Box } from '@mui/material';

type Props = {
  children: React.ReactNode;
  pathname: string;
  active?: boolean;
};

const NavItem: React.FC<Props> = ({ children, pathname, active = false }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        height: '100%',
        padding: (theme) => theme.spacing(1),
        marginRight: (theme) => theme.spacing(2.5),
        marginLeft: (theme) => theme.spacing(2.5),
      }}
    >
      <Link
        component={RouterLink}
        to={pathname}
        underline="none"
        variant="subtitle1"
        color="textPrimary"
        sx={{
          color: (theme) => (active ? 'primary.main' : 'text.primary'),
        }}
      >
        {children}
      </Link>
      {active && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            borderRadius: '10px 10px 0px 0px',
            backgroundColor: 'primary.main',
          }}
        />
      )}
    </Box>
  );
};

export default NavItem;
