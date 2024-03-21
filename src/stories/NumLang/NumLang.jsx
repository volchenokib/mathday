import React from "react"
import "./numLang.css"
import { useDispatch, useSelector } from "react-redux"
import { setLanguage } from "../../languageSlice"
import { useTranslation } from "react-i18next"

function LanguageSwitcher() {
  const dispatch = useDispatch()
  const { i18n } = useTranslation()

  const currentLang = useSelector((state) => state.language.value)

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    dispatch(setLanguage(lang))
  }

  return (
    <div className="num-lang-container">
      <div
        className={`body-medium num-lang-btn ${currentLang === "en" ? "num-lang-btn--active" : ""}`}
        onClick={() => changeLanguage("en")}
      >
        En
      </div>

      <div
        className={`body-medium num-lang-btn ${currentLang === "ru" ? "num-lang-btn--active" : ""}`}
        onClick={() => changeLanguage("ru")}
      >
        Ru
      </div>
    </div>
  )
}

export default LanguageSwitcher
