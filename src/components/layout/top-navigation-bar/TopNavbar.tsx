import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { NavbarMenuContentData } from '../../../data/top-navigation-bar-data.data';
import { CurrentUser } from '../../../utils/interfaces/current-user.interface';
import { NavbarMenuContent } from '../../../utils/interfaces/navbar-menu-content.interface';
import { MenuDropdown } from '../../menu-dropdown/MenuDropdown';
import user_image from '../../../assets/images/shiba_inu_avatar.png';
import './TopNavbar.css';
import { faTh } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch } from '../../../utils/hooks/redux-toolkit-hooks';
import { openSidebarMenu } from '../../../redux/sidebar-menu/sidebar-menu-slice';

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
        <Link to="/" key={index}>
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
    const dispatch = useAppDispatch();
    return (
        <div className="top-navbar">
            <div
                className="top-navbar__responsive-button"
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
                <div className="top-navbar__right-item"></div>
                <div className="top-navbar__right-item"></div>
            </div>
        </div>
    );
};
