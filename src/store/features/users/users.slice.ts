import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { getUsersExtraReducer } from './actions/async/getUsers/getUsers.reducer';

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    getUsersExtraReducer(builder);
  },
});

export const { name, actions } = usersSlice;
export const UsersReducer = usersSlice.reducer;
