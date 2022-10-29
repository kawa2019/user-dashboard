import { FC, useMemo } from 'react';
import { Button, Table, TableBody, TableCell, TableRow } from '@mui/material';
import { useAppSelector } from '../../store';
import { UsersDashboardSelectors } from '../../store/features/usersDashboard/usersDashboard.selectors';
import { UserType } from '../../store/features/usersDashboard/interfaces';
import { UserTableStyled } from './UserTable.styles';
import { Link } from 'react-router-dom';
import DeleteModal from '../DeleteModal';
import UsersTableHead from './UsersTableHead';
import { getSortedUsers } from '../../services/Table';

const UsersTable: FC = () => {
  const users = useAppSelector(UsersDashboardSelectors.getGetUsers);
  const sortOrder = useAppSelector(UsersDashboardSelectors.getSortOrder);

  const sortedUsers = useMemo(() => {
    if (users.data) {
      return getSortedUsers(users.data, sortOrder);
    } else return [];
  }, [users, sortOrder]);

  return (
    <UserTableStyled>
      <Table>
        <UsersTableHead />
        <TableBody>
          {users.data &&
            sortedUsers.map((user: UserType) => (
              <TableRow hover>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user?.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user?.address.city}</TableCell>
                <TableCell>
                  <Button
                    variant={'contained'}
                    to={`/user/${user.id}`}
                    component={Link}
                    className={'UsersTable-Btn UsersTable-EditBtn'}>
                    edit
                  </Button>
                </TableCell>
                <TableCell>
                  {users.data && <DeleteModal users={users.data} userToDelete={user} />}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </UserTableStyled>
  );
};

export default UsersTable;
