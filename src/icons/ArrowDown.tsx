import createSvgIcon from '@mui/material/utils/createSvgIcon';

const Icon = createSvgIcon(
  <svg
    width="15"
    height="10"
    viewBox="0 0 15 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.25 1.625L8 8.375L14.75 1.625"
      stroke="black"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  'ArrowDown'
);

export default Icon;
