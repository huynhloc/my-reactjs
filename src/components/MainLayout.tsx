import React from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
import Footer from './Footer';
import MainNavbar from './MainNavbar';

const MainLayoutRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: '100%',
  paddingTop: 80,
}));

type Props = {
  children?: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <MainLayoutRoot>
      <MainNavbar />
      <Container maxWidth="lg" sx={{ mt: 2 }}>
        {children || <Outlet />}
      </Container>
      <Footer />
    </MainLayoutRoot>
  );
};

export default MainLayout;
