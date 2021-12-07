import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pagination: {
      position: 'relative',
      '& .MuiPagination-ul': {
        justifyContent: 'center',
        '& li': {
          '&:first-child': {
            position: 'absolute',
            left: 0,
            '& svg': {
              marginRight: 12,
            },
          },
          '&:last-child': {
            position: 'absolute',
            right: 0,
            '& svg': {
              marginLeft: 12,
            },
          },
        },
      },
      '& .MuiPaginationItem-previousNext': {
        borderRadius: 8,
        border: '1px solid #D0D5DD',
        boxSizing: 'border-box',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
        height: 36,
        padding: '0 15px',
        '&:hover': {
          backgroundColor: '#F9F5FF',
        },
        '& span': {
          display: 'flex',
          alignItems: 'center',
          color: '#344054',
        },
      },
      '& .MuiPaginationItem-page': {
        color: '#667085',
        minWidth: 40,
        height: 40,
        '&:hover': {
          backgroundColor: '#F9F5FF',
        },
      },
      '& .Mui-selected': {
        backgroundColor: '#F9F5FF !important',
        borderRadius: 8,
      },
    },
  })
);
const Previous = () => (
  <span>
    <ArrowBackIcon />
    Previous
  </span>
);
const Next = () => (
  <span>
    Next
    <ArrowForwardIcon />
  </span>
);
interface Props {
  count: number;
  page: number;
  setPage: (page: number) => void;
}
const PaginationControlled: React.FC<Props> = ({
  page = 1,
  setPage,
  count,
}) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const classes = useStyles();
  return (
    <Stack spacing={2}>
      <Pagination
        shape="rounded"
        count={count}
        page={page}
        className={classes.pagination}
        onChange={handleChange}
        sx={{
          justifyContent: 'center',
        }}
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: Previous, next: Next }}
            {...item}
          />
        )}
      />
    </Stack>
  );
};
export default PaginationControlled;
