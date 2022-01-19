import { BrowserRouter, Route } from 'react-router-dom';
import { RouteLocation } from '../../interfaces/route_location.interface';
import { selectSidebarMenuState } from '../../redux/sidebar-menu/sidebar-menu-slice';
import { MainRoutes } from '../../routes/main-routes';
import { useAppSelector } from '../../utils/hooks/redux-toolkit-hooks';
import { Sidebar } from '../sidebar/Sidebar';

import './Layout.css';
import { TopNavBar } from './top-navigation-bar/TopNavbar';

export const Layout = (): JSX.Element => {
    const isOpen = useAppSelector(selectSidebarMenuState);
    return (
        <BrowserRouter>
            <Route
                render={(props: RouteLocation) => (
                    <div className="layout">
                        <TopNavBar />
                        <Sidebar {...props} />
                        <div className={'layout__content ' + !isOpen}>
                            <main className="layout__content-main">
                                <MainRoutes />
                            </main>
                        </div>
                    </div>
                )}
            />
        </BrowserRouter>
    );
};
