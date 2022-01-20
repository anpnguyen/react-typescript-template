import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import sidebarMenuReducer from '../sidebar-menu/sidebar-menu-slice';
import orderModalReducer from '../order-modal/order-modal';

export const store = configureStore({
    reducer: {
        sidebarMenu: sidebarMenuReducer,
        orderModal: orderModalReducer,
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
