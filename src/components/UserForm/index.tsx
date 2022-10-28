import { ChangeEvent, FC, SyntheticEvent, useCallback, useEffect, useState } from 'react';
import { Button, FormLabel, Stack, TextField } from '@mui/material';
import { UserFormStyled } from './UserForm.styles';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { UsersDashboardSelectors } from '../../store/features/usersDashboard/usersDashboard.selectors';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { UsersDashboardActions } from '../../store/features/usersDashboard';

export const UserForm: FC = () => {
  const params = useParams<{ id?: string }>();
  const users = useSelector(UsersDashboardSelectors.getGetUsers);
  const dispatch = useAppDispatch();
  const [values, setValues] = useState({
    name: '',
    email: '',
  });

  const [errorValues, setErrorValues] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    if (params && params.id && users.data) {
      const paramId = params.id as string;
      const editedUser = users.data.find(user => user.id === +paramId);

      if (editedUser) {
        const newValues = {
          name: editedUser.name,
          email: editedUser.email,
        };

        setValues(newValues);
      }
    }
  }, [params]);

  const handleChange = useCallback(
    (e: ChangeEvent<any>) => {
      const name = e.target.name;
      const newValue = e.target.value;

      const newValues = { ...values, [name]: newValue };
      setValues(newValues);
    },
    [values],
  );

  const handleValidation = useCallback(() => {
    const errors = { email: '', name: '' };
    let isFormValidate = true;
    if (!values.email) {
      isFormValidate = false;
      errors.email = 'Email is required';
    }

    if (!values.name) {
      isFormValidate = false;
      errors.name = 'Name is required';
    }
    setErrorValues(errors);
    return isFormValidate;
  }, [values]);

  const getEditedUser = useCallback(() => {
    if (users.data && params) {
      const paramId = params.id as string;
      return users.data.find(user => user.id === +paramId);
    }
  }, [params, users]);

  const handleSubmit = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();
      const isFormValidate = handleValidation();
      if (isFormValidate) {
        const editedUser = getEditedUser();
        if (users.data) {
          const newUsers = [...users.data];

          if (editedUser) {
            const editedUserIdx = users.data.findIndex(user => user.id === editedUser.id);
            const newEditedUser = { ...editedUser, ...values };
            newUsers[editedUserIdx] = newEditedUser;
            dispatch(UsersDashboardActions.updateUsers(newUsers));
          } else {
            const customId = new Date().getTime();
            const newUser = {
              ...values,
              id: customId,
            };
            const newUsers = [...users.data, newUser];
            dispatch(UsersDashboardActions.updateUsers(newUsers));
          }
        }
      }
    },
    [values, errorValues],
  );

  return (
    <UserFormStyled component="form" onSubmit={handleSubmit}>
      <Stack gap={'25px'}>
        <Stack direction={'row'} gap={'60px'} alignItems={'center'}>
          <FormLabel>Name</FormLabel>
          <TextField
            name={'name'}
            value={values['name']}
            variant="outlined"
            onChange={handleChange}
            error={!!errorValues['name']}
            helperText={errorValues['name']}
          />
        </Stack>
        <Stack direction={'row'} gap={'60px'} alignItems={'center'}>
          <FormLabel>Email</FormLabel>
          <TextField
            name={'email'}
            value={values['email']}
            variant="outlined"
            onChange={handleChange}
            error={!!errorValues['email']}
            helperText={errorValues['email']}
          />
        </Stack>
        <Stack direction={'row'} gap={'10px'} justifyContent={'flex-end'}>
          <Button color={'error'} variant={'outlined'} to={'/'} component={Link}>
            Cancel
          </Button>
          <Button variant={'contained'} type={'submit'}>
            Submit
          </Button>
        </Stack>
      </Stack>
    </UserFormStyled>
  );
};

export default UserForm;
