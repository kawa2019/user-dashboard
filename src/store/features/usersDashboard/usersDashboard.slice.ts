import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { getUsersExtraReducer } from './actions/async/getUsers/getUsers.reducer';
import { updateUsers } from './actions/sync/userDashboard.actions.';

const usersDashboardSlice = createSlice({
  name: 'usersDashboard',
  initialState,
  reducers: {
    updateUsers,
  },
  extraReducers: builder => {
    getUsersExtraReducer(builder);
  },
});

export const { name, actions } = usersDashboardSlice;
export const UsersDashboardReducer = usersDashboardSlice.reducer;
