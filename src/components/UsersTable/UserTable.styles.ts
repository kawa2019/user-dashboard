import { styled, TableContainer } from '@mui/material';

export const UserTableStyled = styled(TableContainer)(({ theme }) => ({
  border: '2px solid #E6E5E6',
  borderBottom: 'none',

  '.MuiTableHead-root ': {
    backgroundColor: '#F5F5F5',
    height: '80px',
  },
  '.MuiTableCell-root': {
    borderBottomWidth: '2px',
  },
  '.UsersTable-Btn': {
    padding: '5px 30px',
  },
  '.UsersTable-EditBtn': {
    backgroundColor: theme.palette.warning.light,
  },
}));
