import React, { useState, useEffect } from "react"
import { AppQuiz } from "./AppQuiz/AppQuiz.jsx"
import { AppContent } from "./AppContent/AppContent.jsx"
import { NumCard } from "./stories/NumCard/NumCard.jsx"
import { day } from "../utils/index.js"
// import { findNodInArrays } from "../utils/nod.js"
import useMobileCheck from "./hooks/useMobileCheck.js"

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

  // console.log("findNodInArrays: ", findNodInArrays(2))

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
            <AppQuiz
              id={"mobile-form"}
              className={"quiz-form"}
              nodData={nodData}
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
              <AppQuiz
                id={"desktop-form"}
                className={"quiz-form"}
                nodData={nodData}
              />
            </div>
          </NumCard>

          <div className="info-container">
            <AppContent data={nodData} />
          </div>
        </>
      )}
    </main>
  )
}

export default AppMain
