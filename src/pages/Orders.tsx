import React, { useEffect, useState } from 'react';
import { Button } from '../components/button/Button';
import { SpinnerLoader } from '../components/loader/SpinnerLoader';
import { Table } from '../components/table/Table';
import { latestOrders } from '../data/dummy-orders';
import {
    useAppDispatch,
    useAppSelector,
} from '../utils/hooks/redux/redux-toolkit-hooks';
import {
    IRenderOrderBodyProps,
    IRenderOrderHeaderProps,
} from '../utils/interfaces/order/order.interface';
import { TableButton } from '../components/table-button/TableButton';
import { Link } from 'react-router-dom';
import { fakeHttpCall } from '../utils/hooks/mocks/mock-http.helper';
import {
    getOrdersFromApi,
    ordersSelector,
} from '../redux/order-api-calls/get-orders-slice';
import {
    deleteOrderForApi,
    deleteOrderSelector,
} from '../redux/order-api-calls/delete-api-call';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useAuth0, User } from '@auth0/auth0-react';

const renderOrderHead = (
    item: IRenderOrderHeaderProps,
    index: number
): JSX.Element => <th key={index}>{item}</th>;

const renderOrderBody = (
    item: IRenderOrderBodyProps,
    index: number,
    handleExpandRow: (dataId: string) => void,
    expandState: any[],
    expandedRows: string | string[],
    submitting: boolean,
    dispatch: any,
    getAccessTokenSilently: Promise<string>
): JSX.Element => {
    async function handleDelete(
        id: string,
        getAccessTokenSilently: Promise<string>
    ): Promise<void> {
        try {
            //await fakeHttpCall(3000);
            await dispatch(deleteOrderForApi(id, getAccessTokenSilently));
            console.log('called');

            window.location.reload();
        } catch (error: any) {
            console.log(error.message);
        }
    }
    return (
        <React.Fragment key={index}>
            <tr>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>
                    <TableButton
                        title={`${
                            expandState[item._id as unknown as number]
                                ? 'Hide'
                                : 'Show'
                        }`}
                        onClick={() => handleExpandRow(item._id)}
                        submitting={submitting}
                    />
                </td>
                <td>
                    <TableButton
                        title="Delete"
                        onClick={() =>
                            handleDelete(item._id, getAccessTokenSilently)
                        }
                    />
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
                        <td></td>
                        <td>
                            <Link
                                to={{
                                    pathname: '/update-order-form',
                                    state: item,
                                }}
                            >
                                <TableButton title="Update" />
                            </Link>
                        </td>
                    </tr>
                </>
            ) : null}
        </React.Fragment>
    );
};

const Orders = () => {
    const { getAccessTokenSilently } = useAuth0<User>();
    const dispatch = useAppDispatch();
    const { loading, orders, getHasError } = useAppSelector(ordersSelector);

    const { submitting, deleteHasError, errorMessage } =
        useAppSelector(deleteOrderSelector);

    const order: IRenderOrderBodyProps[] = orders;

    //const [order, setOrder] = useState([]);

    //Else use the mocked network helper function
    // async function getSimulator() {
    //     const data: any = latestOrders.body;
    //     await setTimeout(() => setOrder(data), 1000);
    // }

    // getSimulator();

    const [expandedRows, setExpandedRows] = useState<string[]>([]);
    const [expandState, setExpandState] = useState<any>({});

    //const [submitting, setSubmitting] = useState<boolean>(false);

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

    useEffect(() => {
        dispatch(getOrdersFromApi(getAccessTokenSilently()));
    }, [dispatch, getAccessTokenSilently]);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2 className="page-header">orders</h2>
                <div>
                    <Link to="/create-order-form">
                        <Button title="Add order" icon={faCartPlus} />
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            {loading ? (
                                <SpinnerLoader />
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
                                            expandedRows,
                                            submitting,
                                            dispatch,
                                            getAccessTokenSilently()
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
