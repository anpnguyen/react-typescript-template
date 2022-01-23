import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './OrderForm.css';

export interface IOrderFormData {
    _id?: string;
    name: string;
    email: string;
    phone: number;
    quantity: number;
}

interface IFormProps {
    _id?: string;
    formDispatchActionHandler(data: IOrderFormData, id?: string): Promise<void>;
    initialState: IOrderFormData;
    historyPath: string;
}

export const OrderForm = (props: IFormProps) => {
    const history = useHistory();

    const [formData, setFormData] = useState<IOrderFormData>(
        props.initialState
    );

    const handleChange = (event: { target: { name: any; value: any } }) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    async function handleSubmit(event: {
        preventDefault: () => void;
    }): Promise<void> {
        // prevents the submit button from refreshing the page
        event.preventDefault();
        try {
            // props.retrieveFormData(orderData);
            await props.formDispatchActionHandler(formData, props._id);
            setFormData(props.initialState);
            history.replace(props.historyPath);
        } catch (error: any) {
            console.log(error.message);
        }
    }

    return (
        <div className="form__wrapper">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__header">
                    <h3>Order Form</h3>
                </div>
                <div className="form__item">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Shiba Kun"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form__item">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="shiba@email.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form__item">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="phone"
                        name="phone"
                        placeholder="123456"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="form__item">
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                        type="number"
                        name="quantity"
                        placeholder="1"
                        value={formData.quantity}
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
