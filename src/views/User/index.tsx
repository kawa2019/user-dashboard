import { FC } from 'react';
import { Container } from '../../shared/Container/Container.styles';
import { Header } from '../../shared/Header/Header.styles';
import { Box, Typography } from '@mui/material';
import UserForm from '../../components/UserForm';
import { UserStyled } from './User.styles';

const User: FC = () => {
  //

  return (
    <Container>
      <UserStyled>
        <Header variant={'h1'}>Dashboard</Header>
        <Box className={'User-MainContent'}>
          <Box className={'User-TopBar'}>
            <Typography variant={'body2'} className={'User-SubHeader'}>
              Form
            </Typography>
          </Box>
          <Box className={'User-FormWrapper'}>
            <UserForm />
          </Box>
        </Box>
      </UserStyled>
    </Container>
  );
};

export default User;
