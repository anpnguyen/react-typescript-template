import React from 'react';
import { Table } from '../components/table/Table';

const latestOrders = {
    header: ['order id', 'name', 'phone', 'quantity'],
    body: [
        {
            id: '#OD1111',
            name: 'Akita Inu',
            phone: 1111,
            quantity: 61,
        },
        {
            id: '#OD2222',
            name: 'Kai Ken',
            phone: 2211,
            quantity: 43,
        },
        {
            id: '#OD3333',
            name: 'Hokkaido Inu',
            phone: 3311,
            quantity: 52,
        },
        {
            id: '#OD4444',
            name: 'Kishu Ken',
            phone: 4411,
            quantity: 55,
        },
        {
            id: '#OD5555',
            name: 'Shiba Inu',
            phone: 5511,
            quantity: 45,
        },
        {
            id: '#OD6666',
            name: 'Shikoku Ken',
            phone: 6611,
            quantity: 53,
        },
    ],
};

interface RenderOrderHeaderProps {
    header: string[];
}

interface RenderOrderBodyProps {
    id: string;
    name: string;
    phone: number;
    quantity: number;
}

const renderOrderHead = (item: RenderOrderHeaderProps, index: number) => (
    <th key={index}>{item}</th>
);

const renderOrderBody = (item: RenderOrderBodyProps, index: number) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.phone}</td>
        <td>{item.quantity}</td>
    </tr>
);

const Orders = () => {
    return (
        <div>
            <h2 className="page-header">orders</h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                headData={latestOrders.header}
                                renderHead={(
                                    item: RenderOrderHeaderProps,
                                    index: number
                                ) => renderOrderHead(item, index)}
                                bodyData={latestOrders.body}
                                renderBody={(
                                    item: RenderOrderBodyProps,
                                    index: number
                                ) => renderOrderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;
