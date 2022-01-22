import React, { useState } from 'react';
import { Button } from '../components/button/Button';
import { SpinnerLoader } from '../components/loader/SpinnerLoader';
import { Modal } from '../components/modal/Modal';
import { Table } from '../components/table/Table';
import { latestOrders } from '../data/dummy-orders';
import { useGetOrders } from '../utils/hooks/query/use-queries';
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
import { TableButton } from '../components/table-button/TableButton';

const renderOrderHead = (
    item: IRenderOrderHeaderProps,
    index: number
): JSX.Element => <th key={index}>{item}</th>;

const renderOrderBody = (
    item: IRenderOrderBodyProps,
    index: number,
    handleExpandRow: (dataId: string) => void,
    expandState: any[],
    expandedRows: string | string[]
): JSX.Element => (
    <React.Fragment key={index}>
        <tr>
            <td>{item._id}</td>
            <td>{item.name}</td>
            <td>
                <TableButton
                    title={`${expandState[index] ? 'Hide' : 'Show'}`}
                    onClick={() => handleExpandRow(item._id)}
                />
            </td>
            <td>
                <TableButton title="Delete" />
            </td>
        </tr>
        {expandedRows.includes(item._id) ? (
            <>
                <tr>
                    <td>
                        <p>Phone: {item.phone}</p>
                    </td>
                    <td>
                        <p>Quantity: {item.quantity}</p>
                    </td>
                    <td>
                        <TableButton title="Update" />
                    </td>
                </tr>
            </>
        ) : null}
    </React.Fragment>
);

const Orders = () => {
    const [order, setOrder] = useState([]);

    // TO fetch from the actual API
    // Use this method
    // const order = useGetOrders();

    //Else use the mocked network helper function
    async function getSimulator() {
        const data: any = latestOrders.body;
        await setTimeout(() => setOrder(data), 1000);
    }

    getSimulator();

    const [expandedRows, setExpandedRows] = useState<string[]>([]);
    const [expandState, setExpandState] = useState<any>({});

    /**
     * This function gets called when show/hide link is clicked.
     */
    const handleExpandRow = (dataId: string) => {
        const currentExpandedRows: string[] = expandedRows;
        const isRowExpanded: boolean = currentExpandedRows.includes(dataId);

        let obj = {};
        //@ts-ignore
        isRowExpanded ? (obj[dataId] = false) : (obj[dataId] = true);
        setExpandState(obj);

        // If the row is expanded, we are here to hide it. Hence remove
        // it from the state variable. Otherwise add to it.
        const newExpandedRows: string[] = isRowExpanded
            ? currentExpandedRows.filter((id: string) => id !== dataId)
            : currentExpandedRows.concat(dataId);

        setExpandedRows(newExpandedRows);
    };

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
                                    ) =>
                                        renderOrderBody(
                                            item,
                                            index,
                                            handleExpandRow,
                                            expandState,
                                            expandedRows
                                        )
                                    }
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
