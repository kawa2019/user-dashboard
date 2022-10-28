import { Box, styled } from '@mui/material';

export const UsersStyled = styled(Box)(({ theme }) => ({
  '.Users-TopBar': {
    padding: '30px 20px 40px 20px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  '.Users-MainContent': {
    borderRadius: '10px',
    boxShadow: theme.shadows[15],
  },
  '.Users-TableWrapper': {
    padding: '10px',
  },
}));
