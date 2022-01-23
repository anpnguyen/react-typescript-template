import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IOrderFormData } from '../../components/order-form/OrderForm';
import { RootState } from '../store/store';

interface IInitialState {
    submitting: boolean;
    updateHasError: boolean;
    errorMessage: string[];
}
export const initialState: IInitialState = {
    submitting: false,
    updateHasError: false,
    errorMessage: [],
};

export function updateOrderForApi(dataToApi: IOrderFormData, idToApi: string) {
    return async (dispatch: any): Promise<void> => {
        dispatch(updateOrderCall());
        try {
            const response = await axios.put<string>(
                `http://localhost:7000/api/order/${idToApi}`,
                dataToApi
            );
            console.log('RESPONSE', response);

            dispatch(updateOrderSuccess());
        } catch (error: any) {
            dispatch(updateOrderFailure(error.message));
        }
    };
}

const updateOrderSlice = createSlice({
    name: 'updateOrder',
    initialState: initialState,
    reducers: {
        updateOrderCall: (state) => {
            state.submitting = true;
        },
        updateOrderSuccess: (state) => {
            state.submitting = false;
            state.updateHasError = false;
        },
        updateOrderFailure: (state, { payload }) => {
            state.submitting = false;
            state.updateHasError = true;
            state.errorMessage = payload;
        },
    },
});

export const { updateOrderCall, updateOrderSuccess, updateOrderFailure } =
    updateOrderSlice.actions;

export const updateOrderSelector = (state: RootState) => state.deleteOrder;

export default updateOrderSlice.reducer;
