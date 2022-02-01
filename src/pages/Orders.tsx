import React, { useEffect } from 'react';
import { Button } from '../components/button/Button';
import { SpinnerLoader } from '../components/loader/SpinnerLoader';
import {
    useAppDispatch,
    useAppSelector,
} from '../utils/hooks/redux/redux-toolkit-hooks';
import { IRenderOrderBodyProps } from '../utils/interfaces/order/order.interface';
import { Link } from 'react-router-dom';
//import { fakeHttpCall } from '../utils/hooks/mocks/mock-http.helper';
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
import Accordion from '../components/customers/components/accordion/Accordion';

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
                            {loading && <SpinnerLoader />}
                            {orders.map((order) => {
                                const data = {
                                    id: order._id,
                                    title: order.name,
                                    info: order.phone,
                                    image: 'https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg',
                                    content: `The history of exploration across nations and across time is not one where nations said, 'Let's explore because it's fun.' It was, 'Let's explore so that we can claim lands for our country, so that we can open up new trade routes; let's explore so we can become more powerful.'`,
                                };
                                return (
                                    <Accordion key={order._id} data={data} />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;
