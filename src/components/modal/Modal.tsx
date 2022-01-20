import React, { useState } from 'react';
import { IOrderFormData, OrderForm } from '../order-form/OrderForm';
import './Modal.css';

export const Modal = (props: any) => {
    const [orderFormData, setOrderFormData] = useState<IOrderFormData[]>([]);
    const modalOpen = props.modalOpen;

    function addOrderFormData(orderFormData: IOrderFormData): void {
        setOrderFormData([orderFormData]);
    }

    return (
        <div className={'modal__wrapper' + modalOpen}>
            <div className="modal__inner">
                <OrderForm
                    handleCloseOrderForm={props.handleCloseOrderForm}
                    addContact={addOrderFormData}
                />
            </div>
        </div>
    );
};
