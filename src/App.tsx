/** configuration relate to UI */
import './i18n';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import useScrollReset from './hooks/useScrollReset';
import LoadingScreen from './components/LoadingScreen';
import { createCustomTheme } from './theme';
import routes from './routes';

const App: React.FC = () => {
  const content = useRoutes(routes);
  useScrollReset();

  const theme = createCustomTheme({
    responsiveFontSizes: true,
  });

  return (
    // using Suspense: wait for language json files loaded
    <React.Suspense fallback={<LoadingScreen />}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {content}
      </ThemeProvider>
    </React.Suspense>
  );
};

export default App;
