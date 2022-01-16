import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import sidebarMenuReducer from '../sidebar-menu/sidebar-menu-slice';

export const store = configureStore({
    reducer: {
        sidebarMenu: sidebarMenuReducer,
    },
    devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
