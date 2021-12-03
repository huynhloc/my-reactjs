import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const Home = () => {
  const { t } = useTranslation(); // fallback to default namespace
  // const { t } = useTranslation('common'); // pass a specific namespace
  return <Typography variant="h4">{t('hello')}</Typography>;
};

export default Home;
