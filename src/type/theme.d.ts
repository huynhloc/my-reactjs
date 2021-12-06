import { ButtonPropsColorOverrides } from '@mui/material/Button/Button';

declare module '@mui/material/Button/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}
