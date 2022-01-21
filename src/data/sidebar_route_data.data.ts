import {
    faTh,
    faBox,
    faUserFriends,
    faCartPlus,
    faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

export const SidebarRouteData = [
    {
        title: 'Dashboard',
        route: '/',
        icon: faTh,
    },
    {
        title: 'Orders',
        route: '/orders',
        icon: faShoppingCart,
    },
    {
        title: 'Customers',
        route: '/customers',
        icon: faUserFriends,
    },
    {
        title: 'Products',
        route: '/products',
        icon: faBox,
    },
];
