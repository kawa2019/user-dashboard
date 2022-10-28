import { SerializedError } from '@reduxjs/toolkit';
import { FetchingStatus } from '../../../services/api/interfaces';

export interface UsersState {
  api: {
    getUsers: {
      fetchingStatus: FetchingStatus;
      data: any | null;
      error: SerializedError | null;
    };
  };
}
