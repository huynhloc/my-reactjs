import React from 'react';
import { Checkbox as BaseCheckbox, CheckboxProps } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    checkboxIcon: {
      border: '1px solid #D0D5DD',
      boxSizing: 'border-box',
      borderRadius: 6,
      width: 20,
      height: 20,
      display: 'flex',
    },
  })
);
interface Props extends CheckboxProps {}

const Checkbox: React.FC<Props> = (props) => {
  const classes = useStyles();
  return (
    <BaseCheckbox
      {...props}
      icon={<span className={classes.checkboxIcon} />}
      sx={{
        borderRadius: 6,
        borderColor: '#D0D5DD',
      }}
    />
  );
};

export default Checkbox;
