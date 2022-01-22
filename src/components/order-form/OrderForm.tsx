import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { deactivateOrderModal } from '../../redux/order-modal/order-modal';
import { axiosPostHelperMethod } from '../../utils/hooks/http/axios-post-helper';
import { useAppDispatch } from '../../utils/hooks/redux/redux-toolkit-hooks';
import './OrderForm.css';

export interface IOrderFormData {
    name: string;
    email: string;
    phone: number;
    quantity: number;
}

interface IModalProps<T> {
    addContact(contact: T): void;
    handleCloseOrderForm?(): void;
}

export const OrderForm = (props: IModalProps<IOrderFormData>) => {
    const dispatch = useAppDispatch();

    const history = useHistory();

    function handleCloseOrderForm(): void {
        dispatch(deactivateOrderModal());
    }

    const [orderData, setOrderData] = useState<IOrderFormData>({
        name: '',
        email: '',
        phone: 0,
        quantity: 0,
    });

    const handleChange = (event: { target: { name: any; value: any } }) => {
        setOrderData({
            ...orderData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event: { preventDefault: () => void }) => {
        // prevents the submit button from refreshing the page
        event.preventDefault();

        axiosPostHelperMethod<IOrderFormData>(
            'http://localhost:7000/api/order/',
            orderData
        );

        //props.addContact(orderData);
        setOrderData({ name: '', email: '', phone: 0, quantity: 0 });
        history.replace('/orders');
    };
    return (
        <div className="form__wrapper">
            <form onSubmit={handleSubmit}>
                <div className="form__header">
                    <h3>Order Form</h3>
                </div>
                <div className="form__item">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Shiba Kun"
                        value={orderData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form__item">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="shiba@email.com"
                        value={orderData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form__item">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="phone"
                        name="phone"
                        placeholder="123456"
                        value={orderData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="form__item">
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                        type="number"
                        name="quantity"
                        placeholder="1"
                        value={orderData.quantity}
                        onChange={handleChange}
                    />
                </div>
                <div className="button_form__wrapper">
                    <div className="form__button__container">
                        <Link to={'/orders'}>
                            <button className="form__button">Cancel</button>
                        </Link>
                    </div>
                    <div className="form__button__container">
                        <button
                            className="form__button"
                            onSubmit={handleSubmit}
                        >
                            Submit Form
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
