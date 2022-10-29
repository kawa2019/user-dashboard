import { FC, useEffect } from 'react';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store';
import { UsersDashboardActions } from '../../store/features/usersDashboard';
import { UsersDashboardSelectors } from '../../store/features/usersDashboard/usersDashboard.selectors';
import { FetchingStatus } from '../../services/api/interfaces';
import UsersTable from '../../components/UsersTable';
import { UsersStyled } from './Users.styles';
import { Container } from '../../shared/Container/Container.styles';
import { Header } from '../../shared/Header/Header.styles';
import { Link } from 'react-router-dom';

const Users: FC = () => {
  const users = useAppSelector(UsersDashboardSelectors.getGetUsers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!users.data) {
      dispatch(UsersDashboardActions.getUsers());
    }
  }, []);

  return (
    <Container>
      <UsersStyled>
        <Header variant={'h1'} className={'Users-Header'}>
          Dashboard
        </Header>
        <Box className={'Users-MainContent'}>
          <Box className={'Users-TopBar'}>
            <Typography variant={'body2'} className={'Users-SubHeader'}>
              User list
            </Typography>
            <Button
              to={'/user'}
              component={Link}
              variant={'contained'}
              className={'Users-AddUserBtn'}>
              Add new
            </Button>
          </Box>
          <Box className={'Users-TableWrapper'}>
            {users.fetchingStatus === FetchingStatus.PENDING && <CircularProgress />}
            {users.data && <UsersTable />}
          </Box>
        </Box>
      </UsersStyled>
    </Container>
  );
};

export default Users;
