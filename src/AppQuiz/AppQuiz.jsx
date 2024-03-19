import React, { useState } from "react"
import "./appQuiz.css"
import { Button } from "../stories/Button/Button.jsx"
import { NumTextInput } from "../stories/NumTextInput/NumTextInput.jsx"
import { NumRadioButton } from "../stories/NumRadioButton/NumRadioButton.jsx"
import { NumMessage } from "../stories/NumMessage/NumMessage.jsx"
import { checkOdd, checkCorrespondence } from "../utils/index.js"
import { numToWords } from "../utils/numToWords.js"

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

  // Message state
  const [msgType, setMsgType] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    // Check if all fields are filled
    if (!firstField || !radioValue) {
      alert("Заполните все поля.")
      return
    }

    const isWordsQuestionValid =
      firstField.toLowerCase().trim() ===
      numToWords(nodData.value).toLowerCase().trim()

    const isEvenQuestionValid = radioValue === checkOdd(nodData.value)

    debugger
    const isThirdValid = thirdField.trim() === (nodData.value / 2).toString()

    // Check if all answers are valid
    if (isWordsQuestionValid && isEvenQuestionValid && isThirdValid) {
      // alert("Верно!")
      setMsgType("success")
    } else {
      setFirstFieldError(!isWordsQuestionValid)
      setIsSecondFieldError(!isEvenQuestionValid)
      setIsThirdFieldError(!isThirdValid)
      setMsgType("error")
    }
  }

  return (
    <form id={id} className={className} onSubmit={handleSubmit}>
      {/* 1-st question */}
      <div className="form-group">
        <NumTextInput
          id="firstField"
          type={"text"}
          name={"firstField"}
          label={"Cловами"}
          placeholder={"Напиши число словами"}
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
          Какое это число?
        </label>
        <div className="radio-group--inline">
          <NumRadioButton
            name="even-option"
            label={"Четное"}
            value="even"
            checked={radioValue === "even"}
            onChange={(value) => handleSecondFieldChange(value)}
          />
          <NumRadioButton
            name="odd-option"
            label={"Нечетное"}
            value="odd"
            checked={radioValue === "odd"}
            onChange={(value) => handleSecondFieldChange(value)}
          />
        </div>
      </div>

      {/* 3-rd question */}
      {checkOdd(nodData.value) === "even" && nodData.value < 1000 && (
        <div id="thirdField" className="form-group">
          <NumTextInput
            id="thirdField"
            type={"text"}
            name={"thirdField"}
            label={"Подели число пополам"}
            placeholder={"Подели число пополам"}
            value={thirdField}
            error={isThirdFieldError}
            onChange={handleThirdFieldChange}
          />
        </div>
      )}

      <div className="from-message-container">
        {msgType && <NumMessage type={msgType} />}
      </div>

      <div className="form-group">
        <Button type="submit" label={"Проверить"} primary={true} />
      </div>
    </form>
  )
}
