import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { UsersDashboardState } from '../../../interfaces';
import { getUsers } from './getUsers';
import { FetchingStatus } from '../../../../../../services/api/interfaces';

export const getUsersExtraReducer = (builder: ActionReducerMapBuilder<UsersDashboardState>) => {
  builder.addCase(getUsers.pending, (state, action) => {
    state.api.getUsers.fetchingStatus = FetchingStatus.PENDING;
    state.api.getUsers.error = null;
  });
  builder.addCase(getUsers.fulfilled, (state, action) => {
    state.api.getUsers.fetchingStatus = FetchingStatus.FULFILLED;
    state.api.getUsers.data = action.payload || null;
    state.api.getUsers.error = null;
  });

  builder.addCase(getUsers.rejected, (state, action) => {
    state.api.getUsers.fetchingStatus = FetchingStatus.REJECTED;
    state.api.getUsers.error = action.error;
  });
};
