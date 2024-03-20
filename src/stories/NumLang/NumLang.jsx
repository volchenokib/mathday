import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { setLanguage } from "../../languageSlice"
import { useTranslation } from "react-i18next"

function LanguageSwitcher() {
  const language = useSelector((state) => state.language.value)
  const dispatch = useDispatch()
  const { i18n } = useTranslation()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
    dispatch(setLanguage(language))
  }

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>Eng</button>
      <button onClick={() => changeLanguage("ru")}>Rus</button>
    </div>
  )
}

export default LanguageSwitcher
