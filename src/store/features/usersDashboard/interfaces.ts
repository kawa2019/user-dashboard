import { SerializedError } from '@reduxjs/toolkit';
import { FetchingStatus } from '../../../services/api/interfaces';

export interface UsersDashboardState {
  api: {
    getUsers: {
      fetchingStatus: FetchingStatus;
      data: UserType[] | null;
      error: SerializedError | null;
    };
  };
  sortOrder: OrderType;
}

interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo?: {
    lat: number;
    lng: number;
  };
}

interface UserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: UserCompany;
}

export type OrderType = 'asc' | 'desc';
