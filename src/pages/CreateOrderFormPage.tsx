import { useAuth0, User } from '@auth0/auth0-react';
import React from 'react';
import { IOrderFormData, OrderForm } from '../components/order-form/OrderForm';
import {
    createOrderForApi,
    createOrdersSelector,
} from '../redux/order-api-calls/create-order-slice';
import {
    useAppDispatch,
    useAppSelector,
} from '../utils/hooks/redux/redux-toolkit-hooks';

const CreateOrderFormPage = () => {
    const dispatch = useAppDispatch();
    const { getAccessTokenSilently } = useAuth0<User>();

    const { submitting, order, createHasError, errorMessage } =
        useAppSelector(createOrdersSelector);

    async function formActionDispatchHandler(
        formData: IOrderFormData
    ): Promise<void> {
        await dispatch(createOrderForApi(formData, getAccessTokenSilently()));
    }

    let initialState = {
        name: '',
        email: '',
        phone: 0,
        quantity: 0,
    };
    const historyPath = '/orders';

    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <OrderForm
                                initialState={initialState}
                                historyPath={historyPath}
                                formDispatchActionHandler={
                                    formActionDispatchHandler
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateOrderFormPage;
