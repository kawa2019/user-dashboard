import { Box, styled } from '@mui/material';

export const UserStyled = styled(Box)(({ theme }) => ({
  '.User-MainContent': {
    borderRadius: '10px',
    boxShadow: theme.shadows[15],
  },
  '.User-TopBar': {
    padding: '30px 20px 40px 20px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  '.User-FormWrapper': {
    padding: '30px 30px 55px 0',
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));
