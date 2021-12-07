import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export function DeleteIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="20"
        fill="none"
        viewBox="0 0 18 20"
      >
        <path
          stroke="#667085"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.667"
          d="M1.5 5h1.667m0 0H16.5M3.167 5v11.666a1.667 1.667 0 001.666 1.667h8.334a1.667 1.667 0 001.666-1.667V4.999H3.167zm2.5 0V3.332a1.667 1.667 0 011.666-1.667h3.334a1.667 1.667 0 011.666 1.667v1.666m-5 4.167v5m3.334-5v5"
        ></path>
      </svg>
    </SvgIcon>
  );
}

export function EditIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="#667085"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.667"
          d="M14.167 2.5A2.357 2.357 0 0117.5 5.835L6.25 17.084l-4.583 1.25 1.25-4.583L14.167 2.5z"
        ></path>
      </svg>
    </SvgIcon>
  );
}
