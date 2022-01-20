import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

export interface SidebarMenuState {
    isOpen: boolean;
}

const initialState: SidebarMenuState = {
    isOpen: false,
};

export const sidebarMenuSlice = createSlice({
    name: 'orderModal',
    initialState: initialState,
    reducers: {
        openSidebarMenu: (state) => {
            state.isOpen = true;
        },
        closeSidebarMenu: (state) => {
            state.isOpen = false;
        },
    },
});

export const { openSidebarMenu, closeSidebarMenu } = sidebarMenuSlice.actions;

export const selectSidebarMenuState = (state: RootState) =>
    state.sidebarMenu.isOpen;

export default sidebarMenuSlice.reducer;
