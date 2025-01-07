/*
import { create } from 'zustand';

export const useGlobalStore = create((set) => ({
    filterParams: null,
    cursor:null,
    setFilterParam: (payload:any) => set({ filterParams: payload }),
    setCursor: (payload:any) => set({ cursor: payload }),
}));
*/

import { create } from 'zustand';

export const useGlobalStore = create((set) => ({
    filterParams: null,
    cursor: null,
    setFilterParam: (payload: any) => set((state:any) => ({
        filterParams: { ...state.filterParams, ...payload },
    })),
    setCursor: (payload: any) => set({ cursor: payload }),
}));
