import React, { useState } from 'react';
import { Button } from '../components/button/Button';
import { SpinnerLoader } from '../components/loader/SpinnerLoader';
import { Modal } from '../components/modal/Modal';
import { Table } from '../components/table/Table';
import { latestOrders } from '../data/dummy-orders';
//import { useGetOrders } from '../utils/hooks/query/use-queries';
import {
    useAppDispatch,
    useAppSelector,
} from '../utils/hooks/redux/redux-toolkit-hooks';
import {
    activateOrderModal,
    selectOrderModalState,
} from '../redux/order-modal/order-modal';
import {
    IRenderOrderBodyProps,
    IRenderOrderHeaderProps,
} from '../utils/interfaces/order/order.interface';

const renderOrderHead = (item: IRenderOrderHeaderProps, index: number) => (
    <th key={index}>{item}</th>
);

const renderOrderBody = (item: IRenderOrderBodyProps, index: number) => (
    <tr key={index}>
        <td>{item._id}</td>
        <td>{item.name}</td>
        <td>{item.phone}</td>
        <td>{item.quantity}</td>
    </tr>
);

const Orders = () => {
    const [order, setOrder] = useState([]);

    async function getSimulator() {
        const data: any = latestOrders.body;
        await setTimeout(() => setOrder(data), 3000);
    }

    getSimulator();

    //const order = useGetOrders();

    const dispatch = useAppDispatch();
    const modalOpen: boolean = useAppSelector(selectOrderModalState);

    function handleOpenOrderForm(): void {
        dispatch(activateOrderModal());
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2 className="page-header">orders</h2>
                {!modalOpen ? (
                    <div onClick={handleOpenOrderForm}>
                        <Button />
                    </div>
                ) : null}
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            {!order ||
                                (order.length === 0 ? <SpinnerLoader /> : null)}
                            {!order || order.length === 0 ? null : modalOpen ? (
                                <Modal />
                            ) : (
                                <Table
                                    headData={latestOrders.header}
                                    renderHead={(
                                        item: IRenderOrderHeaderProps,
                                        index: number
                                    ) => renderOrderHead(item, index)}
                                    bodyData={order}
                                    renderBody={(
                                        item: IRenderOrderBodyProps,
                                        index: number
                                    ) => renderOrderBody(item, index)}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;
