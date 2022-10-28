import { actions as UsersSyncActions } from './users.slice';
import { getUsers } from './actions/async/getUsers/getUsers';

export const UsersActions = {
  ...UsersSyncActions,
  getUsers,
};
