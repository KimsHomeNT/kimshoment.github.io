import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline','btn--contactus'];

const SIZES = ['btn--medium', 'btn--large','btn--medium'];

export const Button = ({
    children, type, onClick
    , buttonStyle, buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ?
        buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link className="btn-mobile">
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}>
                {children}
            </button>
        </Link>
    )
}