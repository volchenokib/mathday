import React, { useState, useEffect } from "react"
import useMobileCheck from "./hooks/useMobileCheck.js"
import { NumCard } from "./stories/NumCard/NumCard.jsx"
import { day, checkOdd, checkCorrespondence } from "../utils/index.js"
import { NumForm } from "./stories/NumForm/NumForm.jsx"

function AppMain() {
  const [nodData, setNodData] = useState(null)

  const isMobile = useMobileCheck()
  const [isCardBackSide, setIsCardBackSide] = useState(false)

  const dbUrl = import.meta.env.VITE_DB_URL
  const URL = `${dbUrl}/${day}.json`

  useEffect(() => {
    fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setNodData(data))
      .catch((error) => console.error("Error fetching data: ", error))
  }, [])

  const [isFirstError, setIsFirstError] = useState(false)

  function handleSubmit({ textInput, radioValue, correspondenceUserAnswer }) {
    // event.preventDefault();

    // Валидация
    if (!textInput || !radioValue) {
      alert("Заполните все поля.")
      return
    }

    const isWordsQuestionValid = nodData.wordsRu.includes(
      textInput.toLowerCase().trim()
    )
    const isEvenQuestionValid = radioValue === checkOdd(nodData.value)
    const isCorrespondenceValid = checkCorrespondence(
      correspondenceUserAnswer,
      nodData.correspondence
    )

    // Проверка ответа пользователя
    if (isWordsQuestionValid && isEvenQuestionValid && isCorrespondenceValid) {
      alert("Верно!")
    } else {
      setIsFirstError(!isWordsQuestionValid)
      alert("Неверно!")
    }
  }

  return (
    <main className="app-main" id="app">
      {isMobile && (
        <NumCard
          title={nodData?.value.toString()}
          subtitle={"число дня"}
          isHeaderButton={true}
          headerButtonHandler={() => setIsCardBackSide(!isCardBackSide)}
        >
          {isCardBackSide ? (
            nodData?.infoRu?.map((txt, idx) => {
              return <p key={`p-${idx}`}>{txt}</p>
            })
          ) : (
            <NumForm
              id={"mobile-form"}
              className={"quiz-form"}
              nodData={nodData}
              onFormSubmit={handleSubmit}
            />
          )}
        </NumCard>
      )}

      {!isMobile && (
        <>
          <NumCard
            className={"num-card-custom"}
            title={nodData?.value.toString()}
            subtitle={"число дня"}
          >
            <div className="form-container">
              <NumForm
                id={"desktop-form"}
                className={"quiz-form"}
                nodData={nodData}
                isFirstError={isFirstError}
                onFormSubmit={handleSubmit}
              />
            </div>
          </NumCard>

          <div className="info-container">
            {nodData?.infoRu?.map((txt, idx) => {
              return <p key={`p-${idx}`}>{txt}</p>
            })}
          </div>
        </>
      )}
    </main>
  )
}

export default AppMain
