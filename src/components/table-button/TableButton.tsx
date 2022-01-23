import React from 'react';
import './TableButton.css';

interface ITableButtonProps {
    onClick?(): void;
    title: string;
    submitting?: boolean;
}

export const TableButton = (props: ITableButtonProps): JSX.Element => {
    return (
        <div className={'table-button__wrapper' + ` ${props.title}`}>
            <button
                className="table-button"
                onClick={props.onClick}
                disabled={props.submitting ? true : false}
            >
                <p>{props.title}</p>
            </button>
        </div>
    );
};
