import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { NavbarMenuContentData } from '../../../data/top-navigation-bar-data.data';
import { CurrentUser } from '../../../utils/interfaces/current-user.interface';
import { NavbarMenuContent } from '../../../utils/interfaces/navbar-menu-content.interface';
import { MenuDropdown } from '../../menu-dropdown/MenuDropdown';
import user_image from '../../../assets/images/shiba_inu_avatar.png';
import './TopNavbar.css';
import { faTh, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import {
    openSidebarMenu,
    selectSidebarMenuState,
} from '../../../redux/sidebar-menu/sidebar-menu-slice';
import {
    useAppDispatch,
    useAppSelector,
} from '../../../utils/hooks/redux/redux-toolkit-hooks';
import { useAuth0, User } from '@auth0/auth0-react';
import { Button } from '../../button/Button';

const current_user = {
    display_name: 'JSD User',
    image: user_image,
};

const UserMenuToggle = (props: CurrentUser): JSX.Element => {
    return (
        <div className="top-navbar__right-user">
            <div className="top-navbar__right-user__image">
                <img src={props.image} alt="user" />
            </div>
            <div className="top-navbar__right-user__name">
                {props.display_name}
            </div>
        </div>
    );
};

const UserMenu = (item: NavbarMenuContent, index: number): JSX.Element => {
    return (
        <Link to={item.linkPath} key={index}>
            <div className="top-navbar__notification-item">
                <FontAwesomeIcon
                    icon={item.icon}
                    className="top-navbar__notification-item__icon"
                />
                <span>{item.content}</span>
            </div>
        </Link>
    );
};

export const TopNavBar = (props: any): JSX.Element => {
    const isOpen = useAppSelector(selectSidebarMenuState);
    const { logout } = useAuth0<User>();
    const navbarState = isOpen ? ' .open' : '';

    const dispatch = useAppDispatch();
    return (
        <div className={'top-navbar' + navbarState}>
            <div
                className={'top-navbar__responsive-button' + navbarState}
                onClick={() => dispatch(openSidebarMenu())}
            >
                <FontAwesomeIcon icon={faTh} />
            </div>
            <div className="top-navbar__right">
                <div className="top-navbar__right-item">
                    <MenuDropdown
                        customToggle={() => UserMenuToggle(current_user)}
                        contentData={NavbarMenuContentData}
                        renderItems={(item: NavbarMenuContent, index: number) =>
                            UserMenu(item, index)
                        }
                    />
                </div>
                <div className="top-navbar__right-item">
                    <Button
                        title="Logout"
                        icon={faSignOutAlt}
                        onClick={logout}
                    />
                </div>
                <div className="top-navbar__right-item"></div>
            </div>
        </div>
    );
};
