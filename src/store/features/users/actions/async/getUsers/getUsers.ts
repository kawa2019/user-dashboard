import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UsersState } from '../../../interfaces';

export const getUsers = createAsyncThunk<UsersState>('users/getUsers', async () => {
  const endpoint = 'https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data';
  const instance = axios.create();

  try {
    return (await instance.get(endpoint)).data;
  } catch (e: any) {
    throw Error(e);
  }
});
