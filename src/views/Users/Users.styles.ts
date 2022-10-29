import { Box, styled } from '@mui/material';

export const UsersStyled = styled(Box)(({ theme }) => ({
  '.Users-Header': {
    marginTop: '40px',
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
