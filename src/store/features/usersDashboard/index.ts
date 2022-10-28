import { actions as UsersSyncActions } from './usersDashboard.slice';
import { getUsers } from './actions/async/getUsers/getUsers';

export const UsersDashboardActions = {
  ...UsersSyncActions,
  getUsers,
};
