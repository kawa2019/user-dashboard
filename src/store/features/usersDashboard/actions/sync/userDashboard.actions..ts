import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { UsersDashboardState, UserType } from '../../interfaces';

export const updateUsers: CaseReducer<UsersDashboardState, PayloadAction<UserType[]>> = (
  state,
  action,
) => {
  state.api.getUsers.data = action.payload;
};
