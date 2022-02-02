import { BrowserRouter, Route } from 'react-router-dom';
import { RouteLocation } from '../../../../interfaces/route_location.interface';
import PublicRoutes from '../../../../routes/public-routes';

export const PublicLayout = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Route
                render={(props: RouteLocation) => (
                    <div>
                        <PublicRoutes />
                    </div>
                )}
            />
        </BrowserRouter>
    );
};
