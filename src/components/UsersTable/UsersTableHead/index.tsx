import { FC, useCallback } from 'react';
import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../store';
import { UsersDashboardActions } from '../../../store/features/usersDashboard';
import { UsersDashboardSelectors } from '../../../store/features/usersDashboard/usersDashboard.selectors';

const UsersTableHead: FC = () => {
  const dispatch = useAppDispatch();
  const sortOrder = useAppSelector(UsersDashboardSelectors.getSortOrder);

  const handleSortByUsername = useCallback(() => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    dispatch(UsersDashboardActions.changeSortOrder(newSortOrder));
  }, [sortOrder]);

  return (
    <TableHead>
      <TableRow>
        <TableCell>Id</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>
          <TableSortLabel active={true} direction={sortOrder} onClick={handleSortByUsername}>
            Username
          </TableSortLabel>
        </TableCell>
        <TableCell>Email</TableCell>
        <TableCell>City</TableCell>
        <TableCell>Edit</TableCell>
        <TableCell>Delete</TableCell>
      </TableRow>
    </TableHead>
  );
};
export default UsersTableHead;
