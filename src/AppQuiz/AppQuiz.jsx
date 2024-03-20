import React, { useState } from "react"
import { useSelector } from "react-redux"
import "./appQuiz.css"
import { NumButton } from "../stories/NumButton/NumButton.jsx"
import { NumTextInput } from "../stories/NumTextInput/NumTextInput.jsx"
import { NumRadioButton } from "../stories/NumRadioButton/NumRadioButton.jsx"
import { NumMessage } from "../stories/NumMessage/NumMessage.jsx"
import { checkOdd } from "../utils/index.js"
import { numToWords } from "../utils/numToWords.js"
import { useTranslation } from "react-i18next"
import * as ntw from "number-to-words"

export const AppQuiz = ({ className, id, nodData, ...props }) => {
  // 1-st question state
  const [firstField, setFirstField] = useState("")
  const [isFirstFieldError, setFirstFieldError] = useState(false)
  const handleFirstFieldChange = (e) => {
    setFirstField(e.target.value)
    setFirstFieldError(false)
  }

  // 2-nd question state
  const [radioValue, setRadioValue] = useState("")
  const [isSecondFieldError, setIsSecondFieldError] = useState(false)
  const handleSecondFieldChange = (value) => {
    setRadioValue(value)
    setIsSecondFieldError(false)
  }

  // 3-th question state
  const [thirdField, setThirdField] = useState("")
  const [isThirdFieldError, setIsThirdFieldError] = useState(false)
  const handleThirdFieldChange = (e) => {
    setThirdField(e.target.value)
    setIsThirdFieldError(false)
  }

  // 4-th question state
  const [fourthField, setFourthField] = useState("")
  const [isFourthFieldError, setIsFourthFieldError] = useState(false)
  const handleFourthFieldChange = (value) => {
    setFourthField(value)
    setIsFourthFieldError(false)
  }

  // 5-st question state
  const [fifthField, setFifthField] = useState("")
  const [isFifthFieldError, setFifthFieldError] = useState(false)
  const handleFifthFieldChange = (e) => {
    setFifthField(e.target.value)
    setFifthFieldError(false)
  }

  // Message state
  const [msgType, setMsgType] = useState("")

  const currentLang = useSelector((state) => state.language.value)
  function handleSubmit(e) {
    e.preventDefault()

    let isWordsQuestionValid = false

    if (currentLang === "en") {
      isWordsQuestionValid =
        firstField.toLowerCase().trim() ===
        ntw.toWords(nodData.value).toLowerCase()
    } else {
      isWordsQuestionValid =
        firstField.toLowerCase().trim() ===
        numToWords(nodData.value).toLowerCase().trim()
    }

    const isEvenQuestionValid = radioValue === checkOdd(nodData.value)

    const isThirdValid = () => {
      if (checkOdd(nodData.value) === "even") {
        return thirdField.trim() === (nodData.value / 2).toString()
      }
      return true
    }

    const isFourthValid = fourthField === (nodData.value % 3 === 0)

    const isFifthValid = () => {
      if (nodData.value <= 500) {
        return fifthField.trim() === (nodData.value * 2).toString()
      }
      return true
    }

    // Check if all answers are valid
    if (
      isWordsQuestionValid &&
      isEvenQuestionValid &&
      isThirdValid() &&
      isFourthValid &&
      isFifthValid()
    ) {
      setMsgType("success")
    } else {
      setFirstFieldError(!isWordsQuestionValid)
      setIsSecondFieldError(!isEvenQuestionValid)
      setIsThirdFieldError(!isThirdValid())
      setIsFourthFieldError(!isFourthValid)
      setFifthFieldError(!isFifthValid())
      setMsgType("error")
    }
  }
  const { t } = useTranslation()

  return (
    <form id={id} className={className} onSubmit={handleSubmit}>
      {/* 1-st question */}
      <div className="form-group">
        <NumTextInput
          id="firstField"
          type={"text"}
          name={"firstField"}
          label={t("In words")}
          placeholder={t("Enter the number in words")}
          autofocus={true}
          value={firstField}
          error={isFirstFieldError}
          onChange={handleFirstFieldChange}
        />
      </div>

      {/* 2-nd question */}
      <div id="typeOfNumber" className="form-group" role="radiogroup">
        <label
          className={`label-text ${isSecondFieldError ? "field-error" : ""}`}
          htmlFor="typeOfNumber"
        >
          {t("even_odd_label")}
        </label>
        <div className="radio-group--inline">
          <NumRadioButton
            name="even-option"
            label={t("even")}
            value="even"
            checked={radioValue === "even"}
            onChange={(value) => handleSecondFieldChange(value)}
          />
          <NumRadioButton
            name="odd-option"
            label={t("odd")}
            value="odd"
            checked={radioValue === "odd"}
            onChange={(value) => handleSecondFieldChange(value)}
          />
        </div>
      </div>

      {/* divide by two */}
      {checkOdd(nodData.value) === "even" && (
        <div id="thirdField" className="form-group">
          <NumTextInput
            id="thirdField"
            type={"text"}
            name={"thirdField"}
            label={t("half_label")}
            placeholder={"÷2"}
            value={thirdField}
            error={isThirdFieldError}
            onChange={handleThirdFieldChange}
          />
        </div>
      )}

      {/* 4-nd question */}
      <div id="divisibleByThree" className="form-group" role="radiogroup">
        <label
          className={`label-text ${isFourthFieldError ? "field-error" : ""}`}
          htmlFor="divisibleByThree"
        >
          {`${t("divisible_by_label")} 3?`}
        </label>
        <div className="radio-group--inline">
          <NumRadioButton
            name="yes-option"
            label={t("yes")}
            value={true}
            checked={fourthField === true}
            onChange={(value) => handleFourthFieldChange(value)}
          />
          <NumRadioButton
            name="no-option"
            label={t("no")}
            value={false}
            checked={fourthField === false}
            onChange={(value) => handleFourthFieldChange(value)}
          />
        </div>
      </div>

      {/* 5-rd question */}
      {nodData.value <= 500 && (
        <div id="fifthField" className="form-group">
          <NumTextInput
            id="fifthField"
            type={"text"}
            name={"fifthField"}
            label={t("double_label")}
            placeholder={"×2"}
            value={fifthField}
            error={isFifthFieldError}
            onChange={handleFifthFieldChange}
          />
        </div>
      )}

      <div className="from-message-container">
        {msgType && <NumMessage type={msgType} />}
      </div>

      <div className="form-group">
        <NumButton type="submit" label={t("check_btn")} mode={"primary"} />
      </div>
    </form>
  )
}
