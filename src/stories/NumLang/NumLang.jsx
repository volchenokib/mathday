import React from "react"
import "./numLang.css"
import { useDispatch } from "react-redux"
import { setLanguage } from "../../languageSlice"
import { useTranslation } from "react-i18next"

function LanguageSwitcher() {
  const dispatch = useDispatch()
  const { i18n } = useTranslation()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
    dispatch(setLanguage(language))
  }

  return (
    <div>
      <button className="num-lang-btn" onClick={() => changeLanguage("en")}>
        En
      </button>
      <button className="num-lang-btn" onClick={() => changeLanguage("ru")}>
        Ru
      </button>
    </div>
  )
}

export default LanguageSwitcher
