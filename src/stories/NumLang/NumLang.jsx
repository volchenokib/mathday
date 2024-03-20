import React from "react"
import "./numLang.css"
import { useDispatch } from "react-redux"
import { setLanguage } from "../../languageSlice"
import { useTranslation } from "react-i18next"
import { NumButton } from "../NumButton/NumButton"

function LanguageSwitcher() {
  const dispatch = useDispatch()
  const { i18n } = useTranslation()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
    dispatch(setLanguage(language))
  }

  return (
    <div>
      <NumButton
        label={"En"}
        mode="text"
        onClick={() => changeLanguage("en")}
      />
      <NumButton
        label={"Ru"}
        mode="text"
        onClick={() => changeLanguage("ru")}
      />
    </div>
  )
}

export default LanguageSwitcher
