import { FC, useCallback, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useAppDispatch } from '../../store';
import { UserType } from '../../store/features/usersDashboard/interfaces';
import { UsersDashboardActions } from '../../store/features/usersDashboard';
import { DialogStyled } from './DeleteModal.styles';

interface DeleteModalProps {
  userToDelete: UserType;
  users: UserType[];
}

const DeleteModal: FC<DeleteModalProps> = ({ userToDelete, users }) => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleDelete = useCallback(() => {
    const newUsers = [...users];
    const userToDeleteIdx = users.findIndex(user => user.id === userToDelete.id);
    newUsers.splice(userToDeleteIdx, 1);
    dispatch(UsersDashboardActions.updateUsers(newUsers));
    handleOpen();
  }, [userToDelete, users, handleOpen]);

  return (
    <>
      <Button
        variant={'contained'}
        onClick={handleOpen}
        color={'error'}
        className={'UsersTable-Btn'}>
        delete
      </Button>
      <DialogStyled open={open}>
        <DialogTitle>Delete</DialogTitle>
        <DialogContent dividers>Do you really want to delete user ?</DialogContent>
        <DialogActions>
          <Button variant={'contained'} onClick={handleOpen} className={'Dialog-CancelBtn'}>
            Cancel
          </Button>
          <Button variant={'contained'} onClick={handleDelete} color={'error'}>
            Delete
          </Button>
        </DialogActions>
      </DialogStyled>
    </>
  );
};

export default DeleteModal;
