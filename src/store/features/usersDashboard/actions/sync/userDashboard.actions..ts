import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { OrderType, UsersDashboardState, UserType } from '../../interfaces';

export const updateUsers: CaseReducer<UsersDashboardState, PayloadAction<UserType[]>> = (
  state,
  action,
) => {
  state.api.getUsers.data = action.payload;
};

export const changeSortOrder: CaseReducer<UsersDashboardState, PayloadAction<OrderType>> = (
  state,
  action,
) => {
  state.sortOrder = action.payload;
};
