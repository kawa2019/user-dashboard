import { FC } from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useAppSelector } from '../../store';
import { UsersDashboardSelectors } from '../../store/features/usersDashboard/usersDashboard.selectors';
import { UserType } from '../../store/features/usersDashboard/interfaces';
import { UserTableStyled } from './UserTable.styles';
import { Link } from 'react-router-dom';

const UsersTable: FC = () => {
  const users = useAppSelector(UsersDashboardSelectors.getGetUsers);

  return (
    <UserTableStyled>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.data &&
            users.data.map((user: UserType) => (
              <TableRow hover>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user?.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user?.address.city}</TableCell>
                <TableCell>
                  <Button variant={'contained'} to={`/user/${user.id}`} component={Link}>
                    edit
                  </Button>
                </TableCell>
                <TableCell>
                  <Button variant={'contained'}>delete</Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </UserTableStyled>
  );
};

export default UsersTable;
