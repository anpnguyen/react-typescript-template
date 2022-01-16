import { Route, Switch } from 'react-router-dom';
import Customers from '../pages/Customers';
import Dashboard from '../pages/Dashboard';
import Orders from '../pages/Orders';
import Products from '../pages/Products';

export const MainRoutes = (): JSX.Element => {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/customers" component={Customers} />
            <Route exact path="/products" component={Products} />
        </Switch>
    );
};
