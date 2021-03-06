import React from 'react';
import MaterialAvatar from '@mui/material/Avatar';
interface AvatarProps {
  name: string;
  avatar?: string;
}
function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}
function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}
const Avatar: React.FC<AvatarProps> = ({ name, avatar }) => {
  if (!avatar) return <MaterialAvatar {...stringAvatar(name)} />;

  return <MaterialAvatar alt={name} src={avatar} />;
};
export default Avatar;
