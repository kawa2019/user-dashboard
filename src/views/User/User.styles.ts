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
    borderBottom: '1px solid #E6E5E6',
  },
  '.User-SubHeader': {
    fontSize: '20px',
  },
  '.User-FormWrapper': {
    padding: '30px 30px 55px 0',
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));
