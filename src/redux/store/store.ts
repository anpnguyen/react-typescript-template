import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import sidebarMenuReducer from '../sidebar-menu/sidebar-menu-slice';
import orderModalReducer from '../order-modal/order-modal';
import getOrdersReducer from '../order-api-calls/get-orders-slice';
import createOrderReducer from '../order-api-calls/create-order-slice';
import deleteOrderReducer from '../order-api-calls/delete-api-call';
import updateOrderReducer from '../order-api-calls/update-order-slice';
import userFilterMenuReducer from '../user-filter-menu/user-filter-menu-slice';

export const store = configureStore({
    reducer: {
        sidebarMenu: sidebarMenuReducer,
        orderModal: orderModalReducer,
        getOrders: getOrdersReducer,
        creteOrder: createOrderReducer,
        deleteOrder: deleteOrderReducer,
        updateOrder: updateOrderReducer,
        userFilterMenu: userFilterMenuReducer,
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
