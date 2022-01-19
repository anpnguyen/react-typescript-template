import React from 'react';
import { SpinnerLoader } from '../components/loader/SpinnerLoader';
import { Table } from '../components/table/Table';
import { latestOrders } from '../data/dummy-orders';
import { useGetOrders } from '../utils/hooks/query/use-queries';
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
    const order = useGetOrders();

    return (
        <div>
            <h2 className="page-header">orders</h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        {order.length === 0 ? (
                            <SpinnerLoader />
                        ) : (
                            <div className="card__body">
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
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;
