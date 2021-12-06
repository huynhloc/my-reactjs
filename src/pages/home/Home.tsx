import { useTranslation } from 'react-i18next';
import { Box, Typography, Button } from '@mui/material';

const Home = () => {
  const { t } = useTranslation(); // fallback to default namespace
  // const { t } = useTranslation('common'); // pass a specific namespace
  return (
    <Box>
      <Typography variant="h4">{t('hello')}</Typography>
      <Box display="flex">
        <Box sx={{ p: 1 }}>
          <Button variant="contained" color="primary" size="large">
            Button 1
          </Button>
        </Box>
        <Box sx={{ p: 1 }}>
          <Button variant="contained" color="secondary">
            Button 2
          </Button>
        </Box>
        <Box sx={{ p: 1 }}>
          <Button variant="contained" color="tertiary" size="small">
            Button 3
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
