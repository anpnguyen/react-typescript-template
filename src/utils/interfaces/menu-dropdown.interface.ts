import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { NavbarMenuContent } from './navbar-menu-content.interface';

export interface MenuDropdownProps {
    icon?: IconDefinition;
    badge?: boolean;
    customToggle?: () => boolean | React.ReactChild;

    contentData: NavbarMenuContent[];
    renderItems: (
        argument1: NavbarMenuContent,
        argument2: number
    ) => any | null;
    renderFooter?: () => boolean;
}
