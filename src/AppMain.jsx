import React, { useState } from "react"
import { AppQuiz } from "./AppQuiz/AppQuiz.jsx"
import { AppContent } from "./AppContent/AppContent.jsx"
import { NumCard } from "./stories/NumCard/NumCard.jsx"
import { nodData } from "./data/index.js"
import useMobileCheck from "./hooks/useMobileCheck.js"

function AppMain() {
  const isMobile = useMobileCheck()
  const [isCardBackSide, setIsCardBackSide] = useState(false)

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
            <AppContent data={nodData} />
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
