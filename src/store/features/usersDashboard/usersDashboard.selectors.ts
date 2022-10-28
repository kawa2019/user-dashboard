import { RootState } from '../../interfaces';

const getGetUsers = (state: RootState) => state.usersDashboard.api.getUsers;

export const UsersDashboardSelectors = {
  getGetUsers,
};
