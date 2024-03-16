import React from "react"
import PropTypes from "prop-types"
import "./numMessage.css"

export const NumMessage = ({ type, ...props }) => {
  return (
    <div className={"num-message-wrapper"}>
      {type === "error" && (
        <>
          <div className={"num-message-icon"}>❌</div>
          <span className={"num-message-icon large"}>Неверно</span>
        </>
      )}
      {type === "success" && (
        <>
          <div className={"num-message-icon"}>🎉</div>
          <span className={"num-message-icon large"}>Верно!</span>
        </>
      )}
    </div>
  )
}

NumMessage.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
}

NumMessage.defaultProps = {
  text: "",
  type: "",
}
