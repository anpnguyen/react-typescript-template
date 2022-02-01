import React, { useState } from 'react';
import { IAccordionData } from '../../../../pages/Customers';
import AccordionButton from '../accordion-button/AccordionButton';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './Accordion.css';

export default function Accordion(data: any): JSX.Element {
    const [isActive, setIsActive] = useState(false);

    const { id, title, info, image, content } = data.data;
    return (
        <div className="accordion">
            <div
                className="accordion__header"
                onClick={() => setIsActive(!isActive)}
            >
                <div>
                    <p>id: {id}</p>
                </div>
                <div>
                    <p>title: {title}</p>
                </div>
                <div>
                    <p>info: {info}</p>
                </div>
            </div>
            {isActive && (
                <div className="accordion__content">
                    <div className="accordion__content___image">
                        <img src={image} alt="" />
                    </div>
                    <div className="accordion__content___items">
                        <p>{content}</p>
                        <div className="accordion__content___buttons">
                            <AccordionButton
                                text={'Edit'}
                                icon={faEdit}
                                type={'edit'}
                            />
                            <AccordionButton
                                text={'Delete'}
                                icon={faTrashAlt}
                                type={'delete'}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
