import {Route, Switch} from 'react-router-dom';
import MainTestPage from '../pages/MainTestPage';

export const MainRoutes = (): JSX.Element => {
	return (
		<Switch>
			<Route exact path='/' component={MainTestPage} />
		</Switch>
	);
};
