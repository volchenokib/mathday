import React from "react"
import "./appHeader.css"
import NumLang from "../stories/NumLang/NumLang.jsx"

function AppHeader() {
  return (
    <header className={"app-header"}>
      <div className="app-logo-container">
        <img src="./logo.svg" alt="site logo" />
        <span className={"siteName"}>Math Day</span>
      </div>

      <NumLang />
    </header>
  )
}

export default AppHeader
