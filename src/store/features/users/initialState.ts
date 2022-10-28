import { UsersState } from './interfaces';
import { FetchingStatus } from '../../../services/api/interfaces';

export const initialState: UsersState = {
  api: {
    getUsers: {
      fetchingStatus: FetchingStatus.IDLE,
      data: null,
      error: null,
    },
  },
};
