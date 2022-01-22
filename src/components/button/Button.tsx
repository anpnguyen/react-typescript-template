import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Button.css';

interface IButtonProps {
    handleCloseOrderForm?(): void;
}

export const Button = (): JSX.Element => {
    return (
        <div className="button__wrapper">
            <button className="button">
                <FontAwesomeIcon icon={faCartPlus} className="button__icon" />
                <p>Add order</p>
            </button>
        </div>
    );
};

//props.handleCloseOrderForm
