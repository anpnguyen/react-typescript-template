import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/images/jsd_logo.png';
import { SidebarRouteData } from '../../data/sidebar_route_data.data';
import { Link } from 'react-router-dom';

import { IconProp } from '@fortawesome/fontawesome-svg-core';

import {
    useAppDispatch,
    useAppSelector,
} from '../../utils/hooks/redux/redux-toolkit-hooks';

import { RouteLocation } from '../../interfaces/route_location.interface';
import {
    closeSidebarMenu,
    selectSidebarMenuState,
} from '../../redux/sidebar-menu/sidebar-menu-slice';
import { SidebarMenuContent } from '../../utils/interfaces/sidebar_menu_content.interface';

const SidebarItem = (props: {
    active: boolean;
    icon: IconProp;
    title: boolean | React.ReactChild;
}): JSX.Element => {
    const active = props.active ? 'active' : '';
    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <FontAwesomeIcon
                    icon={props.icon}
                    className="sidebar__item-inner__item"
                />
                <span>{props.title}</span>
            </div>
        </div>
    );
};

export const Sidebar = (props: RouteLocation): JSX.Element => {
    const activeItem = SidebarRouteData.findIndex(
        (item: SidebarMenuContent) => item.route === props.location.pathname
    );

    const dispatch = useAppDispatch();
    const isOpen = useAppSelector(selectSidebarMenuState);
    const sidebarClass = isOpen ? '-open' : '-close';

    return (
        <div className={'sidebar' + sidebarClass}>
            <div className="sidebar__logo">
                <img src={logo} alt="website logo"></img>
                <button
                    className="sidebar__button"
                    onClick={() => dispatch(closeSidebarMenu())}
                >
                    <FontAwesomeIcon
                        icon={faWindowClose}
                        className="sidebar__button__icon"
                    />
                </button>
            </div>
            {SidebarRouteData.map((item: SidebarMenuContent, index: number) => {
                return (
                    <Link key={index} to={item.route}>
                        <SidebarItem
                            title={item.title}
                            icon={item.icon}
                            active={index === activeItem}
                        />
                    </Link>
                );
            })}
        </div>
    );
};
