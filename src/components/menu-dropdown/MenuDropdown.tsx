import React, { useRef } from 'react';
import './MenuDropdown.css';
import { NavbarMenuContent } from '../../utils/interfaces/navbar-menu-content.interface';
import { MenuDropdownProps } from '../../utils/interfaces/menu-dropdown.interface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const clickOutsideReference = (
    content_reference: React.RefObject<HTMLDivElement>,
    toggle_reference: React.RefObject<HTMLButtonElement>
) => {
    document.addEventListener('mousedown', (e: MouseEvent) => {
        // user click toggle
        if (
            toggle_reference.current &&
            toggle_reference.current.contains(e.target as Node | null)
        ) {
            content_reference.current?.classList.toggle('active');
        } else {
            // user click outside toggle and content
            if (
                content_reference.current &&
                !content_reference.current.contains(e.target as Node | null)
            ) {
                content_reference.current.classList.remove('active');
            }
        }
    });
};

export const MenuDropdown = (props: MenuDropdownProps): JSX.Element => {
    const dropdown_toggle_element = useRef<HTMLButtonElement>(null);
    const dropdown_content_element = useRef<HTMLDivElement>(null);

    clickOutsideReference(dropdown_content_element, dropdown_toggle_element);
    return (
        <div className="menu-dropdown">
            <button
                ref={dropdown_toggle_element}
                className="menu-dropdown__toggle"
            >
                {props.icon ? <FontAwesomeIcon icon={props.icon} /> : ''}
                {props.badge ? (
                    <span className="menu-dropdown__toggle-badge">
                        {props.badge}
                    </span>
                ) : (
                    ''
                )}
                {props.customToggle ? props.customToggle() : ''}
            </button>
            <div
                ref={dropdown_content_element}
                className="menu-dropdown__content"
            >
                {props.contentData && props.renderItems
                    ? props.contentData.map(
                          (item: NavbarMenuContent, index: number) =>
                              props.renderItems(item, index)
                      )
                    : ''}
                {props.renderFooter ? (
                    <div className="menu-dropdown__footer">
                        {props.renderFooter()}
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};
