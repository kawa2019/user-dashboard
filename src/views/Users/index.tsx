import { FC, useEffect } from 'react';
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useAppDispatch } from '../../store';
import { UsersActions } from '../../store/features/users';

const Users: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(UsersActions.getUsers());
  }, []);

  return (
    <Box>
      <Typography component={'h1'} variant={'body1'}>
        Dashboard
      </Typography>
      <TableContainer>
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
            <TableRow hover>
              <TableCell>1</TableCell>
              <TableCell>John Smith</TableCell>
              <TableCell>jsonsmith</TableCell>
              <TableCell>john@gmail.com</TableCell>
              <TableCell>NYC</TableCell>
              <TableCell>
                <Button>edit</Button>
              </TableCell>
              <TableCell>
                <Button>delete</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Users;
