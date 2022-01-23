import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IRenderOrderBodyProps } from '../../utils/interfaces/order/order.interface';
import { RootState } from '../store/store';

interface IInitialState {
    loading: boolean;
    getHasError: boolean;
    errorMessage: string[];
    orders: IRenderOrderBodyProps[];
}
export const initialState: IInitialState = {
    loading: false,
    getHasError: false,
    errorMessage: [],
    orders: [],
};

export function getOrdersFromApi() {
    return async (dispatch: any): Promise<void> => {
        dispatch(getOrdersCall());
        try {
            const response = await axios.get<IRenderOrderBodyProps>(
                'http://localhost:7000/api/order/'
            );
            const data: IRenderOrderBodyProps = response.data;

            dispatch(getOrdersSuccess(data));
        } catch (error: any) {
            dispatch(getOrdersFailure(error.message));
        }
    };
}

const getOrdersSlice = createSlice({
    name: 'getOrders',
    initialState: initialState,
    reducers: {
        getOrdersCall: (state) => {
            state.loading = true;
        },
        getOrdersSuccess: (state, { payload }) => {
            state.orders = payload;
            state.loading = false;
            state.getHasError = false;
        },
        getOrdersFailure: (state, { payload }) => {
            state.loading = false;
            state.getHasError = true;
            state.errorMessage = payload;
        },
    },
});

export const { getOrdersCall, getOrdersSuccess, getOrdersFailure } =
    getOrdersSlice.actions;

export const ordersSelector = (state: RootState) => state.getOrders;

export default getOrdersSlice.reducer;
