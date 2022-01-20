import React, { useState } from 'react';
import { selectOrderModalState } from '../../redux/order-modal/order-modal';
import { useAppSelector } from '../../utils/hooks/redux/redux-toolkit-hooks';
import { IOrderFormData, OrderForm } from '../order-form/OrderForm';
import './Modal.css';

export const Modal = (props: any) => {
    const [orderFormData, setOrderFormData] = useState<IOrderFormData[]>([]);
    const modalOpen: boolean = useAppSelector(selectOrderModalState);
    const modalClass = modalOpen ? '-active' : '-notactive';

    function addOrderFormData(orderFormData: IOrderFormData): void {
        setOrderFormData([orderFormData]);
    }

    return (
        <div className={'modal__wrapper' + modalClass}>
            <div className="modal__inner">
                <OrderForm
                    handleCloseOrderForm={props.handleCloseOrderForm}
                    addContact={addOrderFormData}
                />
            </div>
        </div>
    );
};
