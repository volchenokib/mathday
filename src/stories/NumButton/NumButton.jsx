import React from "react"
import PropTypes from "prop-types"
import "./numButton.css"

/**
 * Primary UI component for user interaction
 */
export const NumButton = ({
  primary,
  backgroundColor,
  size,
  label,
  type,
  mode,
  ...props
}) => {
  return (
    <button
      type={type}
      className={`
      num-button
      num-button--${size}
      num-button--${mode}`}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  )
}

NumButton.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  type: PropTypes.string,
  mode: PropTypes.string,
  onClick: PropTypes.func,
}

NumButton.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  type: "button",
  mode: "primary",
  onClick: undefined,
}
