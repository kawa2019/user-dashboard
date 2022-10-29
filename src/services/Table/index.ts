import { OrderType, UserType } from '../../store/features/usersDashboard/interfaces';

export const getSortedUsers = (users: UserType[], order: OrderType) => {
  if (order === 'asc') {
    return [...users].sort((a, b) => {
      const x = a.username;
      const y = b.username;
      return x < y ? -1 : x > y ? 1 : 0;
    });
  } else
    return [...users].sort((a, b) => {
      const x = a.username;
      const y = b.username;
      return x > y ? -1 : x < y ? 1 : 0;
    });
};