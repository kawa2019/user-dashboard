import { Box, styled } from '@mui/material';

export const UsersStyled = styled(Box)(({ theme }) => ({
  '.Users-Header': {
    marginTop: '40px',
  },
  '.Users-MainContent': {
    borderRadius: '10px',
    boxShadow: theme.shadows[15],
    marginTop: '40px',
    marginBottom: '30px',
  },
  '.Users-TopBar': {
    padding: '30px 20px 40px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid #E6E5E6',
  },
  '.Users-SubHeader': {
    fontSize: '20px',
  },
  '.Users-AddUserBtn': {
    padding: '5px 40px',
  },
  '.Users-TableWrapper': {
    padding: '10px',
  },
}));
