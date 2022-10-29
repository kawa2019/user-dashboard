import { Box, styled } from '@mui/material';

export const MainContent = styled(Box)(({ theme }) => ({
  borderRadius: '10px',
  boxShadow: theme.shadows[15],
  marginTop: '40px',
  marginBottom: '30px',
}));
