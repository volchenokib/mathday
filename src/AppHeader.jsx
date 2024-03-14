import React from "react"
import styles from "./styles/AppHeader.module.css"

function AppHeader() {
  return (
    <header className={styles.appHeader}>
      <span className={styles.siteName}>Math Day</span>
    </header>
  )
}

export default AppHeader
