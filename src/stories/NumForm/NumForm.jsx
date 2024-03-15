import React, { useState } from "react"
import "./numForm.css"
import { Button } from "../Button/Button.jsx"
import { NumTextInput } from "../NumTextInput/NumTextInput.jsx"
import { NumRadioButton } from "../NumRadioButton/NumRadioButton.jsx"
import { checkOdd, checkCorrespondence } from "../../../utils/index.js"

export const NumForm = ({ className, id, nodData, ...props }) => {
  // 1-st question state
  const [firstField, setFirstField] = useState("")
  const [isFirstFieldError, setFirstFieldError] = useState(false)
  const handleFirstFieldChange = (e) => {
    setFirstField(e.target.value)
    setFirstFieldError(false)
  }

  // 2-nd question state
  const [radioValue, setRadioValue] = useState("")

  // 3-th question state
  const [correspondenceUserAnswer, setCorrespondenceUserAnswer] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    // Check if all fields are filled
    if (!firstField || !radioValue) {
      alert("Заполните все поля.")
      return
    }

    const isWordsQuestionValid = nodData.wordsRu.includes(
      firstField.toLowerCase().trim()
    )
    const isEvenQuestionValid = radioValue === checkOdd(nodData.value)
    const isCorrespondenceValid = checkCorrespondence(
      correspondenceUserAnswer,
      nodData.correspondence
    )

    // Check if all answers are valid
    if (isWordsQuestionValid && isEvenQuestionValid && isCorrespondenceValid) {
      alert("Верно!")
    } else {
      setFirstFieldError(!isWordsQuestionValid)
      alert("Неверно!")
    }
  }

  return (
    <form id={id} className={className} onSubmit={handleSubmit}>
      {/* 1-rd question */}
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

      {/* 2-rd question */}
      <div className="form-group">
        <div className="label-text">Какое это число?</div>
        <div className="radio-group--inline">
          <NumRadioButton
            name="even-option"
            label={"Четное"}
            value="even"
            checked={radioValue === "even"}
            onChange={(value) => setRadioValue(value)}
          />
          <NumRadioButton
            name="odd-option"
            label={"Нечетное"}
            value="odd"
            checked={radioValue === "odd"}
            onChange={(value) => setRadioValue(value)}
          />
        </div>
      </div>

      {/* 3-rd question */}
      {nodData?.correspondence && (
        <div className="form-group">
          <div className="label-text">
            К какому из следующих описаний число подходит лучше всего?
          </div>
          {nodData.correspondence.map(({ value, description }) => {
            return (
              <NumRadioButton
                key={value}
                name={`value-option-${value}`}
                label={description}
                value={value}
                checked={correspondenceUserAnswer === value}
                onChange={(value) => setCorrespondenceUserAnswer(value)}
              />
            )
          })}
        </div>
      )}
      <div className="form-group">
        <Button type="submit" label={"Проверить"} primary={true} />
      </div>
    </form>
  )
}
