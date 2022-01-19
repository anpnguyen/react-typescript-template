import React from 'react';
import './SpinnerLoader.css';

export const SpinnerLoader = (): JSX.Element => {
    return (
        <div className="spinner-loader__wrapper">
            <div className="spinner-loader"></div>
        </div>
    );
};
