import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

export interface OrderModalState {
    isActive: boolean;
}

const initialState: OrderModalState = {
    isActive: false,
};

export const orderModalSlice = createSlice({
    name: 'orderModal',
    initialState: initialState,
    reducers: {
        activateOrderModal: (state) => {
            state.isActive = true;
        },
        deactivateOrderModal: (state) => {
            state.isActive = false;
        },
    },
});

export const { activateOrderModal, deactivateOrderModal } =
    orderModalSlice.actions;

export const selectOrderModalState = (state: RootState) =>
    state.orderModal.isActive;

export default orderModalSlice.reducer;
