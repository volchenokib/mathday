import React from "react"
import PropTypes from "prop-types"
import "./numRadioButton.css"

export const NumRadioButton = ({
  name,
  label,
  required,
  value,
  checked,
  onChange,
  ...props
}) => {
  const handleClick = (e) => {
    e.preventDefault()
    if (onChange) onChange(value)
  }

  return (
    <div className={"num-radio-button-container"} onClick={handleClick}>
      <button className={"num-radio-button"}>
        {checked && (
          <span className={"num-radio-button-icon-wrapper"}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="num-radio-button-icon"
            >
              <path
                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        )}
      </button>
      <input
        type="radio"
        name={name}
        required={required}
        value={value}
        className={"num-radio-button-input"}
        {...props}
      />
      <label className={"num-radio-button-label"} htmlFor={name}>
        {label}
      </label>
    </div>
  )
}

NumRadioButton.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}

NumRadioButton.defaultProps = {
  name: "numRadioButton",
  label: "numRadioButton",
  required: false,
  value: "",
  checked: false,
  onChange: undefined,
}
