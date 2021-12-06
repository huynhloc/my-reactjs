import React from 'react';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Button,
  ListItemText,
  MenuItem,
  Popover,
  Typography,
} from '@mui/material';
import GlobeIcon from '../icons/Globe';
import ArrowDownIcon from '../icons/ArrowDown';

const languageOptions: string[] = ['vi', 'en', 'fr'];

const LanguagePopover: React.FC = () => {
  const anchorRef = useRef(null);
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setOpen(false);
  };

  const selectedOption = i18n.language || 'en-US';

  return (
    <>
      <Button
        size="small"
        onClick={handleOpen}
        ref={anchorRef}
        startIcon={<GlobeIcon />}
        disableRipple
        disableTouchRipple
        disableFocusRipple
        sx={{
          height: '48px',
          paddingX: 1,
        }}
      >
        <Box sx={{ width: 30 }}>
          <Typography
            sx={{
              color: 'black',
            }}
            variant="subtitle1"
          >
            {selectedOption}
          </Typography>
        </Box>
        <Box
          sx={{
            paddingTop: '20px',
          }}
        >
          <ArrowDownIcon />
        </Box>
      </Button>
      <Popover
        anchorEl={anchorRef.current}
        anchorOrigin={{
          horizontal: 'center',
          vertical: 'bottom',
        }}
        keepMounted
        onClose={handleClose}
        open={open}
        PaperProps={{
          sx: { width: 70 },
        }}
      >
        {languageOptions.map((language) => (
          <MenuItem
            onClick={() => handleChangeLanguage(language)}
            key={language}
          >
            <ListItemText
              primary={
                <Typography
                  sx={{
                    color: 'black',
                    textTransform: 'uppercase',
                  }}
                  variant="subtitle1"
                >
                  {language}
                </Typography>
              }
            />
          </MenuItem>
        ))}
      </Popover>
    </>
  );
};

export default LanguagePopover;
