import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Button.css';

interface IButtonProps {
    onClick?(): void;
    title: string;
    icon: IconProp;
}

export const Button = (props: IButtonProps): JSX.Element => {
    return (
        <div className="button__wrapper">
            <button className="button" onClick={props.onClick}>
                <FontAwesomeIcon icon={props.icon} className="button__icon" />
                <p>{props.title}</p>
            </button>
        </div>
    );
};

//props.handleCloseOrderForm
