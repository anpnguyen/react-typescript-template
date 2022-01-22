import React from 'react';
import './TableButton.css';

interface ITableButtonProps {
    onClick?(): void;
    title: string;
}

export const TableButton = (props: ITableButtonProps): JSX.Element => {
    return (
        <div className={'table-button__wrapper' + ` ${props.title}`}>
            <button className="table-button" onClick={props.onClick}>
                <p>{props.title}</p>
            </button>
        </div>
    );
};
