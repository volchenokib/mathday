import React from "react";
import PropTypes from 'prop-types';
import './numCard.css';

export const NumCard = ({className, title, subtitle, children, isHeaderButton, headerButtonHandler, ...props }) => {
    return (
        <div className={`num-card-wrapper ${className}`}>
            <div className="num-card-header">
                <div>
                    <div className={'num-card-title'}>{title}</div>
                    <div className={'num-card-subtitle'}>{subtitle}</div>
                </div>
               
                {isHeaderButton && <button onClick={headerButtonHandler}>Header Button</button>}
            </div>
            <div className="num-card-body">
                {children}
            </div>
        </div>
    );
}