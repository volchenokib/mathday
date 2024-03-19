import React from "react"
import styles from "./styles/AppHeader.module.css"
import NumLang from "./stories/NumLang/NumLang.jsx"

function AppHeader() {
  return (
    <header className={styles.appHeader}>
      <span className={styles.siteName}>Math Day</span>
      <NumLang />
    </header>
  )
}

export default AppHeader
