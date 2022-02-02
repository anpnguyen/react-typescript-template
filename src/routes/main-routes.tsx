import { Route, Switch } from 'react-router-dom';
import Customers from '../pages/private/Customers';
import Dashboard from '../pages/private/Dashboard';
import CreateOrderFormPage from '../pages/private/CreateOrderFormPage';
import Orders from '../pages/private/Orders';
import Products from '../pages/private/Products';
import UpdateOrderFormPage from '../pages/private/UpdateOrderFormPage';

export const MainRoutes = (): JSX.Element => {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/customers" component={Customers} />
            <Route exact path="/products" component={Products} />
            <Route
                exact
                path="/create-order-form"
                component={CreateOrderFormPage}
            />
            <Route
                exact
                path="/update-order-form"
                component={UpdateOrderFormPage}
            />
        </Switch>
    );
};
