import { faUser, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { NavbarMenuContent } from '../utils/interfaces/navbar-menu-content.interface';

export const NavbarMenuContentData: NavbarMenuContent[] = [
    {
        icon: faUser,
        content: 'Profile',
        linkPath: '/',
    },
    {
        icon: faCog,
        content: 'Settings',
        linkPath: '/',
    },
    {
        icon: faSignOutAlt,
        content: 'Logout',
        linkPath: '/',
    },
];
