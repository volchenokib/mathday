import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { AppQuiz } from "../AppQuiz/AppQuiz.jsx"
// import { AppContent } from "../AppContent/AppContent.jsx"
import { NumCard } from "../stories/NumCard/NumCard.jsx"
import { nodData } from "../data/index.js"
import useMobileCheck from "../hooks/useMobileCheck.js"
import "./appMain.css"

function AppMain() {
  const isMobile = useMobileCheck()
  const [isCardBackSide, setIsCardBackSide] = useState(false)
  const { t } = useTranslation()

  return (
    <main className="app-main" id="app">
      {isMobile && (
        <NumCard
          title={nodData?.value.toString()}
          subtitle={"число дня"}
          isHeaderButton={false}
          headerButtonHandler={() => setIsCardBackSide(!isCardBackSide)}
        >
          <AppQuiz
            id={"mobile-form"}
            className={"quiz-form"}
            nodData={nodData}
          />
          {/* {isCardBackSide ? (
            <AppContent data={nodData} />
          ) : (
            <AppQuiz
              id={"mobile-form"}
              className={"quiz-form"}
              nodData={nodData}
            />
          )} */}
        </NumCard>
      )}

      {!isMobile && (
        <>
          <NumCard
            className={"num-card-custom"}
            title={nodData?.value.toString()}
            subtitle={t("number of the day")}
          >
            <div className="form-container">
              <AppQuiz
                id={"desktop-form"}
                className={"quiz-form"}
                nodData={nodData}
              />
            </div>
          </NumCard>
        </>
      )}
    </main>
  )
}

export default AppMain
