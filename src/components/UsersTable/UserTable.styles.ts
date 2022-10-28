import { styled, TableContainer } from '@mui/material';

export const UserTableStyled = styled(TableContainer)(() => ({
  border: '2px solid #E6E5E6',
  borderBottom: 'none',

  '.MuiTableHead-root ': {
    backgroundColor: '#F5F5F5',
    height: '80px',
  },
  '.MuiTableCell-root': {
    borderBottomWidth: '2px',
  },
}));
