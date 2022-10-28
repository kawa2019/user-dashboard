import { UsersDashboardState } from './interfaces';
import { FetchingStatus } from '../../../services/api/interfaces';

export const initialState: UsersDashboardState = {
  api: {
    getUsers: {
      fetchingStatus: FetchingStatus.IDLE,
      data: null,
      error: null,
    },
  },
};
