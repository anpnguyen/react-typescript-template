import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IOrderFormData } from '../../components/order-form/OrderForm';
import { IRenderOrderBodyProps } from '../../utils/interfaces/order/order.interface';
import { RootState } from '../store/store';

interface IInitialState {
    submitting: boolean;
    createHasError: boolean;
    errorMessage: string[];
    order: IRenderOrderBodyProps[];
}
export const initialState: IInitialState = {
    submitting: false,
    createHasError: false,
    errorMessage: [],
    order: [],
};

export function createOrderForApi(dataToApi: IOrderFormData) {
    return async (dispatch: any): Promise<void> => {
        dispatch(createOrderCall());
        try {
            const response = await axios.post<IOrderFormData>(
                'http://localhost:7000/api/order/',
                dataToApi
            );
            console.log('RESPONSE', response);

            const data: IOrderFormData = response.data;

            dispatch(createOrderSuccess(data));
        } catch (error: any) {
            dispatch(createOrderFailure(error.message));
        }
    };
}

const createOrdersSlice = createSlice({
    name: 'updateOrder',
    initialState: initialState,
    reducers: {
        createOrderCall: (state) => {
            state.submitting = true;
        },
        createOrderSuccess: (state, { payload }) => {
            state.order = payload;
            state.submitting = false;
            state.createHasError = false;
        },
        createOrderFailure: (state, { payload }) => {
            state.submitting = false;
            state.createHasError = true;
            state.errorMessage = payload;
        },
    },
});

export const { createOrderCall, createOrderSuccess, createOrderFailure } =
    createOrdersSlice.actions;

export const createOrdersSelector = (state: RootState) => state.creteOrder;

export default createOrdersSlice.reducer;
