import React from "react"
import "./appHeader.css"
import NumLang from "../stories/NumLang/NumLang.jsx"

function AppHeader() {
  return (
    <header className={"app-header"}>
      <span className={"siteName"}>Math Day</span>
      <NumLang />
    </header>
  )
}

export default AppHeader
