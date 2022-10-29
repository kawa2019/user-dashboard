import { Dialog, styled } from '@mui/material';

export const DialogStyled = styled(Dialog)(({ theme }) => ({
  '.Dialog-CancelBtn': {
    backgroundColor: theme.palette.grey[700],
  },
}));
