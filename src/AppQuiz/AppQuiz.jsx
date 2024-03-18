import React, { useState } from "react"
import "./appQuiz.css"
import { Button } from "../stories/Button/Button.jsx"
import { NumTextInput } from "../stories/NumTextInput/NumTextInput.jsx"
import { NumRadioButton } from "../stories/NumRadioButton/NumRadioButton.jsx"
import { NumMessage } from "../stories/NumMessage/NumMessage.jsx"
import { checkOdd, checkCorrespondence } from "../../utils/index.js"

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
  const [correspondenceUserAnswer, setCorrespondenceUserAnswer] = useState("")
  const [isThirdFieldError, setIsThirdFieldError] = useState(false)
  const handleThirdFieldChange = (value) => {
    setCorrespondenceUserAnswer(value)
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

    const isWordsQuestionValid = nodData.quiz.wordsRu.includes(
      firstField.toLowerCase().trim()
    )
    const isEvenQuestionValid = radioValue === checkOdd(nodData.value)
    const isCorrespondenceValid = checkCorrespondence(
      correspondenceUserAnswer,
      nodData.quiz.correspondence
    )

    // Check if all answers are valid
    if (isWordsQuestionValid && isEvenQuestionValid && isCorrespondenceValid) {
      // alert("Верно!")
      setMsgType("success")
    } else {
      setFirstFieldError(!isWordsQuestionValid)
      setIsSecondFieldError(!isEvenQuestionValid)
      setIsThirdFieldError(!isCorrespondenceValid)
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
      {nodData?.quiz?.correspondence && (
        <div id="correspondence" className="form-group" role="radiogroup">
          <label
            className={`label-text ${isThirdFieldError ? "field-error" : ""}`}
            htmlFor="typeOfNumber"
          >
            К какому из следующих описаний число подходит лучше всего?
          </label>
          {nodData.quiz.correspondence.map(({ value, description }) => {
            return (
              <NumRadioButton
                key={value}
                name={`value-option-${value}`}
                label={description}
                value={value}
                checked={correspondenceUserAnswer === value}
                onChange={(value) => handleThirdFieldChange(value)}
              />
            )
          })}
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
