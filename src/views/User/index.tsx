import { FC } from 'react';
import { Container } from '../../shared/Container/Container.styles';
import { Header } from '../../shared/Header/Header.styles';
import { Box, Typography } from '@mui/material';
import UserForm from '../../components/UserForm';
import { UserStyled } from './User.styles';
import { MainContent } from '../../shared/MainContent/MainContent.styles';
import { TopBar } from '../../shared/TopBar/TopBar.styles';

const User: FC = () => {
  //notes
  //mozna jeszcze zrobic tak
  //zamiast shared co jest dobre
  //zrobic w comnent
  return (
    <Container>
      <UserStyled>
        <Header variant={'h1'} className={'Users-Header'}>
          Dashboard
        </Header>
        <MainContent>
          <TopBar>
            <Typography variant={'body2'} className={'User-SubHeader'}>
              Form
            </Typography>
          </TopBar>
          <Box className={'User-FormWrapper'}>
            <UserForm />
          </Box>
        </MainContent>
      </UserStyled>
    </Container>
  );
};

export default User;
