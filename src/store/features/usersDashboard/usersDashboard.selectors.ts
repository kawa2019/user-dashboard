import { RootState } from '../../interfaces';

const getGetUsers = (state: RootState) => state.usersDashboard.api.getUsers;
const getSortOrder = (state: RootState) => state.usersDashboard.sortOrder;

export const UsersDashboardSelectors = {
  getGetUsers,
  getSortOrder,
};
