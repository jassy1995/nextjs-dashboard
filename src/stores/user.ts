import { UserState } from '@/util/model';
import { create } from 'zustand';
import { PersistStorage, persist } from 'zustand/middleware';

const initialState: Omit<
  UserState,
  'loggedIn' | 'loggedOut' | 'setRedirectPath'
> = {
  user: {},
  isSignedIn: false,
  redirectPath: '/',
};

// Custom storage for Zustand persistence
const customLocalStorage: PersistStorage<UserState> = {
  getItem: (name: string) => {
    const item = localStorage.getItem(name);
    return item ? JSON.parse(item) : null;
  },
  setItem: (name: string, value: any) => {
    localStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: (name: string) => {
    localStorage.removeItem(name);
  },
};

// Zustand store with persistence
export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      ...initialState,
      loggedIn: (user: any) => {
        set({
          user,
          isSignedIn: true,
        });
      },
      loggedOut: () => {
        set({
          user: {},
          isSignedIn: false,
        });
      },
      setRedirectPath: (redirectFrom: string) => {
        set({
          redirectPath: redirectFrom,
        });
      },
    }),
    {
      name: 'buyhub-user', // Unique name for the localStorage key
      storage: customLocalStorage, // Use localStorage for persistence
      onRehydrateStorage: (state) => {
        // After rehydration, trigger the store's rehydrate function
        if (state?.rehydrate) {
          state.rehydrate(state);
        }
      },
    }
  )
);
