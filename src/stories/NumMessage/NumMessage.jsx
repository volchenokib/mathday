import React from "react"
import PropTypes from "prop-types"
import "./numMessage.css"
import { useTranslation } from "react-i18next"

export const NumMessage = ({ type, ...props }) => {
  const { t } = useTranslation()
  return (
    <div className={"num-message-wrapper"}>
      {type === "error" && (
        <>
          <div className={"num-message-icon"}>❌</div>
          <span className={"num-message-icon large"}>
            {t("incorrect_answer_msg")}
          </span>
        </>
      )}
      {type === "success" && (
        <>
          <div className={"num-message-icon"}>🎉</div>
          <span className={"num-message-icon large"}>
            {t("correct_answer_msg")}
          </span>
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
