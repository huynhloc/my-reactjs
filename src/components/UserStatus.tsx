import React from 'react';
import Chip from '@mui/material/Chip';

interface UserStatusProps {
  status: string;
}
const UserStatus: React.FC<UserStatusProps> = ({ status }) => {
  return <Chip label={status} />;
};
export default UserStatus;
