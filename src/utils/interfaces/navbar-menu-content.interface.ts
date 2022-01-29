import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { MouseEventHandler } from 'react';

export interface NavbarMenuContent {
    icon: IconDefinition;
    content: string;
    linkPath: string;
}
