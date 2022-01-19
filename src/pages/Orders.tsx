import React from 'react';
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
                        <div className="card__body">
                            {order.length === 0 ? (
                                <div>
                                    <h2>Loading...</h2>
                                </div>
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
