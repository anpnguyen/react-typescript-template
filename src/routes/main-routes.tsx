import { Route, Switch } from 'react-router-dom';
import Customers from '../pages/Customers';
import Dashboard from '../pages/Dashboard';
import OrderFormPage from '../pages/OrderFormPage';
import Orders from '../pages/Orders';
import Products from '../pages/Products';

export const MainRoutes = (): JSX.Element => {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/customers" component={Customers} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/order-form" component={OrderFormPage} />
        </Switch>
    );
};
