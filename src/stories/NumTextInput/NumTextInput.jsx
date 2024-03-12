import React from 'react';
import PropTypes from 'prop-types';
import './numTextInput.css';

/**
 * Primary UI component for user interaction
 */
export const NumTextInput = ({ type, name, label, placeholder, required, value, ...props }) => {
  return (
    <div  className={['num-text-input-container'].join(' ')}>
      <label className={['num-text-input-label'].join(' ')} htmlFor={name}> {label}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        required= {required}
        autocomplete="off"
        value={value}
        className={['num-text-input'].join(' ')}
        {...props}
      />
    </div>
  );
};
