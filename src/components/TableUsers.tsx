import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from 'src/components/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';
import DeleteIcon from 'src/icons/Delete';
import EditIcon from 'src/icons/Edit';
import { visuallyHidden } from '@mui/utils';
import Avatar from 'src/components/Avatar';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import Stack from '@mui/material/Stack';
import Pagination from 'src/components/Pagination';
import HelpIcon from 'src/icons/Help';
import { take } from 'lodash';
type Order = 'asc' | 'desc';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    userNameWrapper: {
      marginLeft: 12,
    },
    userName: {
      color: '#101828',
      fontSize: 14,
      fontWeight: 500,
    },
    commonText: {
      color: '#667085',
      fontSize: 14,
    },
    totalUsers: {
      backgroundColor: '#F9F5FF',
      borderRadius: 16,
      marginLeft: 8,
      color: '#6941C6',
    },
    dotIcon: {
      display: 'flex',
      background: '#12B76A',
      width: 6,
      height: 6,
      borderRadius: 50,
    },
    pagination: {
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 11,
      paddingBottom: 16,
    },
    helpIcon: {
      marginTop: 3,
    },
  })
);
interface HeadCell {
  id: string;
  label: string;
  description?: string;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'status',
    label: 'Status',
  },
  {
    id: 'role',
    label: 'Role',
    description: 'this is a text',
  },
  {
    id: 'email',
    label: 'Email address',
  },
  {
    id: 'team',
    label: 'Team',
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: string) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };
  const classes = useStyles();
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.description ? (
              <Box
                component="span"
                sx={{
                  color: '#667085',
                  fontWeight: 500,
                }}
              >
                {headCell.label}
                <Tooltip title={headCell.description}>
                  <span className={classes.helpIcon}>
                    <HelpIcon />
                  </span>
                </Tooltip>
              </Box>
            ) : (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
                sx={{
                  color: '#667085',
                  fontWeight: 500,
                }}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            )}
          </TableCell>
        ))}
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  );
}
interface Team {
  name: string;
  color?: string;
  backgroundColor?: string;
}
function Teams({ teams }: { teams: Team[] }) {
  const total = teams.length;
  const [items, setItems] = React.useState<Team[]>(take(teams, 4));
  const remain = total - items.length;
  return (
    <Stack direction={'row'} spacing={0.5}>
      {items.map((team, index) => (
        <Chip
          label={team.name}
          sx={{
            height: 22,
            borderRadius: 16,
            fontWeight: 500,
            color: team.color,
            backgroundColor: team.backgroundColor,
          }}
          key={`team-${index}`}
        />
      ))}
      {total > 4 && (
        <Chip
          label={remain === 0 ? '-' : `+${remain}`}
          onClick={() => {
            if (remain === 0) {
              setItems(take(teams, 4));
            } else {
              setItems(teams);
            }
          }}
          sx={{
            height: 22,
            borderRadius: 16,
            fontWeight: 500,
            fontSize: 12,
            color: '#344054',
            backgroundColor: '#F2F4F7',
            cursor: 'pointer',
          }}
          key={`+${remain}`}
        />
      )}
    </Stack>
  );
}
interface EnhancedTableToolbarProps {
  numSelected: number;
  total?: number;
  onClearAllClick: (event: React.MouseEvent<unknown>) => void;
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const { numSelected, total, onClearAllClick } = props;
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{
            flex: '1 1 100%',
            color: '#101828',
            fontSize: 18,
          }}
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          variant="h6"
          id="tableTitle"
          sx={{
            flex: '1 1 100%',
            color: '#101828',
            fontSize: 18,
          }}
          component="div"
        >
          Team members
          {total && (
            <Chip
              sx={{
                backgroundColor: '#F9F5FF',
                borderRadius: 16,
                color: '#6941C6',
                marginLeft: '8px',
              }}
              label={<span>{total} users</span>}
            ></Chip>
          )}
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton onClick={onClearAllClick}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : null}
    </Toolbar>
  );
};

interface RowProps {
  id: number | string;
  name: string;
  subtitle?: string;
  status: string;
  role: string;
  email: string;
  teams: Team[];
}
interface TableUsersProps {
  rows: RowProps[];
  total: number;
  page: number;
  onDelete: (id: number | string) => void;
  onEdit: (id: number | string) => void;
}
export const TableUsers: React.FC<TableUsersProps> = ({
  rows = [],
  total = 0,
  page = 0,
  onEdit,
  onDelete,
}) => {
  const classes = useStyles();
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<string>('name');
  const [selected, setSelected] = React.useState<readonly string[]>([]);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: string
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClearAllClick = (event: React.MouseEvent<unknown>) => {
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };
  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? rows.length : 0;

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Paper
        sx={{
          overflow: 'hidden',
          width: '100%',
          mb: 2,
          border: '1px solid #E4E7EC',
          boxShadow:
            '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
          borderRadius: 2,
        }}
      >
        <EnhancedTableToolbar
          onClearAllClick={handleClearAllClick}
          total={total}
          numSelected={selected.length}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {rows.map((row, index) => {
                const isItemSelected = isSelected(row.name);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    sx={{
                      '&.MuiTableRow-hover': {},
                      backgroundColor: () =>
                        index % 2 === 0 ? '#F9FAFB' : '#ffffff',
                    }}
                    onClick={(event) => handleClick(event, row.name)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.name}
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      <Stack spacing={1} direction="row">
                        <Avatar name={row.name} />
                        <Stack className={classes.userNameWrapper}>
                          <div className={classes.userName}>{row.name}</div>
                          <div className={classes.commonText}>
                            {row.subtitle}
                          </div>
                        </Stack>
                      </Stack>
                    </TableCell>
                    <TableCell align="left">
                      <Chip
                        icon={<span className={classes.dotIcon} />}
                        sx={{
                          background: '#ECFDF3',
                          borderRadius: 16,
                          height: 22,
                          color: '#027A48',
                          fontWeight: 500,
                          textTransform: 'capitalize',
                        }}
                        label={row.status}
                      />
                    </TableCell>
                    <TableCell align="left">
                      <div className={classes.commonText}>{row.role}</div>
                    </TableCell>
                    <TableCell align="left">
                      <div className={classes.commonText}>{row.email}</div>
                    </TableCell>
                    <TableCell align="left">
                      <Teams teams={row.teams} />
                    </TableCell>
                    <TableCell align="left">
                      <Tooltip title="Delete">
                        <IconButton onClick={() => onDelete(row.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="edit">
                        <IconButton onClick={() => onEdit(row.id)}>
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
          <div className={classes.pagination}>
            <Pagination
              page={1}
              count={10}
              setPage={() => {
                console.log('11');
              }}
            />
          </div>
        </TableContainer>
      </Paper>
    </Box>
  );
};
