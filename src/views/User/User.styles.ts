import { Box, styled } from '@mui/material';

export const UserStyled = styled(Box)(({ theme }) => ({
  '.Users-Header': {
    marginTop: '40px',
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
