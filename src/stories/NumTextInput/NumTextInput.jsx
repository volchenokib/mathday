import React from "react"
import PropTypes from "prop-types"
import "./numTextInput.css"

/**
 * Primary UI component for user interaction
 */
export const NumTextInput = ({
  type,
  name,
  label,
  placeholder,
  required,
  value,
  error,
  ...props
}) => {
  return (
    <div className={["num-text-input-container"].join(" ")}>
      <label
        className={`num-text-input-label ${error ? "error" : ""}`}
        htmlFor={name}
      >
        {" "}
        {label}
      </label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        required={required}
        autoComplete="off"
        value={value}
        className={`num-text-input`}
        {...props}
      />
    </div>
  )
}

NumTextInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.bool,
}

NumTextInput.defaultProps = {
  type: "text",
  name: "numTextInput",
  label: "NumTextInput",
  placeholder: "NumTextInput",
  required: false,
  value: "",
  onClick: undefined,
  error: false,
}
