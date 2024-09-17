// 'use client';

// import { createGlobalState } from '.';
// import { TUpdateUser, TUser } from '@/util/model';

// type UserState = {
//   user: TUser;
//   isSignedIn: boolean;
// };

// const userCredentials = manageLocalStorage({}, 'get');

// const userDefaultState: UserState = {
//   user: userCredentials.user || null,
//   isSignedIn: userCredentials.isSignedIn || false,
// };

// export function manageLocalStorage(data: any, action: string) {
//   let user;
//   if (action === 'set') {
//     localStorage.setItem('buyhub-user', JSON.stringify(data));
//   } else if (action === 'get') {
//     user = JSON.parse(localStorage.getItem('buyhub-user') || '{}');
//   } else {
//     localStorage.removeItem('buyhub-user');
//   }
//   return user;
// }

// export const loggedIn = ({ setData, data }: TUpdateUser) => {
//   setData(data);
//   manageLocalStorage(data, 'set');
// };
// export const loggedOut = ({ resetData }: any) => {
//   resetData();
//   manageLocalStorage({}, 'remove');
// };

// export const useUserState = createGlobalState<UserState>(
//   'user',
//   userDefaultState
// );
