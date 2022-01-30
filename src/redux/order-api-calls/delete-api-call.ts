import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IOrderFormData } from '../../components/order-form/OrderForm';
import { IRenderOrderBodyProps } from '../../utils/interfaces/order/order.interface';
import { RootState } from '../store/store';

interface IInitialState {
    submitting: boolean;
    deleteHasError: boolean;
    errorMessage: string[];
}
export const initialState: IInitialState = {
    submitting: false,
    deleteHasError: false,
    errorMessage: [],
};

export function deleteOrderForApi(
    idToApi: string,
    getAccessToken?: Promise<string>
) {
    return async (dispatch: any): Promise<void> => {
        dispatch(deleteOrderCall());
        try {
            const token = await getAccessToken;
            const response = await axios.delete<string>(
                `http://localhost:7000/api/order/${idToApi}`,
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log('RESPONSE', response);

            dispatch(deleteOrderSuccess());
        } catch (error: any) {
            dispatch(deleteOrderFailure(error.message));
        }
    };
}

const deleteOrderSlice = createSlice({
    name: 'updateOrder',
    initialState: initialState,
    reducers: {
        deleteOrderCall: (state) => {
            state.submitting = true;
        },
        deleteOrderSuccess: (state) => {
            state.submitting = false;
            state.deleteHasError = false;
        },
        deleteOrderFailure: (state, { payload }) => {
            state.submitting = false;
            state.deleteHasError = true;
            state.errorMessage = payload;
        },
    },
});

export const { deleteOrderCall, deleteOrderSuccess, deleteOrderFailure } =
    deleteOrderSlice.actions;

export const deleteOrderSelector = (state: RootState) => state.deleteOrder;

export default deleteOrderSlice.reducer;
