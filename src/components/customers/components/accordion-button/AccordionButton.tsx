import React from 'react';
import './AccordionButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AccordionButton(props: any) {
    return (
        <div className={`accordion__button ${props.type}`}>
            <span className={'accordion__button___icon'}>
                {<FontAwesomeIcon icon={props.icon} className="icon" />}
            </span>
            <span className="accordion__button___text">{props.text}</span>
        </div>
    );
}
