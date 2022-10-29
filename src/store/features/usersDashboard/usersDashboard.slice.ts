import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { getUsersExtraReducer } from './actions/async/getUsers/getUsers.reducer';
import { changeSortOrder, updateUsers } from './actions/sync/userDashboard.actions.';

const usersDashboardSlice = createSlice({
  name: 'usersDashboard',
  initialState,
  reducers: {
    updateUsers,
    changeSortOrder,
  },
  extraReducers: builder => {
    getUsersExtraReducer(builder);
  },
});

export const { name, actions } = usersDashboardSlice;
export const UsersDashboardReducer = usersDashboardSlice.reducer;
