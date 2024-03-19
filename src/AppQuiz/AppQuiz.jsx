import React, { useState } from "react"
import "./appQuiz.css"
import { Button } from "../stories/Button/Button.jsx"
import { NumTextInput } from "../stories/NumTextInput/NumTextInput.jsx"
import { NumRadioButton } from "../stories/NumRadioButton/NumRadioButton.jsx"
import { NumMessage } from "../stories/NumMessage/NumMessage.jsx"
import { checkOdd } from "../utils/index.js"
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

  function handleSubmit(e) {
    e.preventDefault()

    const isWordsQuestionValid =
      firstField.toLowerCase().trim() ===
      numToWords(nodData.value).toLowerCase().trim()

    const isEvenQuestionValid = radioValue === checkOdd(nodData.value)

    const isThirdValid = thirdField.trim() === (nodData.value / 2).toString()

    const isFourthValid = fourthField === (nodData.value % 3 === 0)

    const isFifthValid = fifthField.trim() === (nodData.value * 2).toString()

    // Check if all answers are valid
    if (
      isWordsQuestionValid &&
      isEvenQuestionValid &&
      isThirdValid &&
      isFourthValid &&
      isFifthValid
    ) {
      // alert("Верно!")
      setMsgType("success")
    } else {
      setFirstFieldError(!isWordsQuestionValid)
      setIsSecondFieldError(!isEvenQuestionValid)
      setIsThirdFieldError(!isThirdValid)
      setIsFourthFieldError(!isFourthValid)
      setFifthFieldError(!isFifthValid)
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
          label={"Число прописью"}
          placeholder={"Напиши число словами"}
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
      {checkOdd(nodData.value) === "even" && nodData.value <= 1000 && (
        <div id="thirdField" className="form-group">
          <NumTextInput
            id="thirdField"
            type={"text"}
            name={"thirdField"}
            label={"Подели число пополам"}
            placeholder={"÷2"}
            value={thirdField}
            error={isThirdFieldError}
            onChange={handleThirdFieldChange}
          />
        </div>
      )}

      {/* 4-nd question */}
      <div id="typeOfNumber" className="form-group" role="radiogroup">
        <label
          className={`label-text ${isFourthFieldError ? "field-error" : ""}`}
          htmlFor="typeOfNumber"
        >
          Это число делиться на 3 без остатка?
        </label>
        <div className="radio-group--inline">
          <NumRadioButton
            name="yes-option"
            label={"Да"}
            value={true}
            checked={fourthField === true}
            onChange={(value) => handleFourthFieldChange(value)}
          />
          <NumRadioButton
            name="no-option"
            label={"Нет"}
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
            label={"Удвой число"}
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
        <Button type="submit" label={"Проверить"} primary={true} />
      </div>
    </form>
  )
}
