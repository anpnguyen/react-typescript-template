import { useAuth0, User } from '@auth0/auth0-react';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { IOrderFormData, OrderForm } from '../components/order-form/OrderForm';
import { updateOrderForApi } from '../redux/order-api-calls/update-order-slice';
import { useAppDispatch } from '../utils/hooks/redux/redux-toolkit-hooks';

const UpdateOrderFormPage = () => {
    const { getAccessTokenSilently } = useAuth0<User>();
    let location = useLocation<IOrderFormData>();
    const id: string = location.state._id as string;
    const state: IOrderFormData = location.state;

    let initialState = {
        name: state.name,
        email: state.email,
        phone: state.phone,
        quantity: state.quantity,
    };

    const historyPath = '/orders';

    const dispatch = useAppDispatch();

    async function formActionDispatchHandler(
        formData: IOrderFormData
    ): Promise<void> {
        await dispatch(
            updateOrderForApi(formData, id, getAccessTokenSilently())
        );
    }

    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <OrderForm
                                formDispatchActionHandler={
                                    formActionDispatchHandler
                                }
                                initialState={initialState}
                                historyPath={historyPath}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateOrderFormPage;
