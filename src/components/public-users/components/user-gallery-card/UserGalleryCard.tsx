import React from 'react';
import AccordionButton from '../../../customers/components/accordion-button/AccordionButton';
import {
    faCheck,
    faHeart,
    faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';
import './UserGalleryCard.css';

export default function UserGalleryCard(data: any) {
    const loggedIn = false;
    const { id, name, description, image, skills, rate } = data;
    return (
        <div className="user-gallery-card">
            <div className="user-gallery-card__image">
                <img src={image} alt="" />
            </div>
            <div className="user-gallery-card__content">
                <div className="user-gallery-card__content___header">
                    <h1>{name}</h1>
                </div>
                <div className="user-gallery-card__content___info">
                    {skills.map((skill: any, index: number) => {
                        return <p key={index}>{skill}</p>;
                    })}
                    <p>${rate} Hour</p>
                </div>
                <div className="user-gallery-card__content___description">
                    <p>{description}</p>
                </div>
                {loggedIn ? (
                    <div className="user-gallery-card__buttons">
                        <AccordionButton
                            text={`Hire ${name}`}
                            type={'hire'}
                            icon={faCheck}
                        />
                        <AccordionButton
                            text={`Save`}
                            type={'delete'}
                            icon={faHeart}
                        />
                    </div>
                ) : (
                    <AccordionButton
                        text={`Login to hire ${name}`}
                        type={'edit'}
                        icon={faSignInAlt}
                    />
                )}
            </div>
        </div>
    );
}
