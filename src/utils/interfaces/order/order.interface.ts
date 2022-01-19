import { ReactNode } from 'react';

export interface IRenderOrderHeaderProps {
    [x: string]: ReactNode;
    header: string[];
}

export interface IRenderOrderBodyProps {
    _id: string;
    name: string;
    phone: number;
    quantity: number;
}
