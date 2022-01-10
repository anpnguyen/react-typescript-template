import {BrowserRouter, Route} from 'react-router-dom';
import {RouteLocation} from '../../interfaces/route_location.interface';
import {MainRoutes} from '../../routes/main-routes';

import './Layout.css';

export const Layout = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Route
				render={(props: RouteLocation) => (
					<div className='layout'>
						<div className='layout__content'>
							<main className='layout__content-main'>
								<MainRoutes />
							</main>
						</div>
					</div>
				)}
			/>
		</BrowserRouter>
	);
};
