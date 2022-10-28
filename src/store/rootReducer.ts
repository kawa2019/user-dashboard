import { combineReducers } from '@reduxjs/toolkit';
import { UsersDashboardReducer } from './features/usersDashboard/usersDashboard.slice';

export const rootReducer = () => {
  return combineReducers({
    usersDashboard: UsersDashboardReducer,
  });
};
