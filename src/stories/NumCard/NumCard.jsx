import React from "react";
import PropTypes from 'prop-types';
import './numCard.css';

export const NumCard = ({className, title, subtitle, children, isHeaderButton, headerButtonHandler, ...props }) => {
    return (
        <div className={`num-card-wrapper ${className}`}>
            <div className="cardHeader">
                <div className={'num-card-title'}>{title}</div>
                <div className={'num-card-subtitle'}>{subtitle}</div>
                {isHeaderButton && <button onClick={headerButtonHandler}>Header Button</button>}
            </div>
            {children}
        </div>
    );
}