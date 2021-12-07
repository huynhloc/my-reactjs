import { SvgIconProps } from '@mui/material/SvgIcon';
function Icon(props: SvgIconProps) {
  return (
    <svg {...props} width="16" height="16" fill="none" viewBox="0 0 16 16">
      <path
        stroke="#98A2B3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.333"
        d="M6.06 6a2 2 0 013.886.666c0 1.334-2 2-2 2M8 11.333h.006M14.666 8A6.667 6.667 0 111.333 8a6.667 6.667 0 0113.333 0z"
      ></path>
    </svg>
  );
}

export default Icon;
