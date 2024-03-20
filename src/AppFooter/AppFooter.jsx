import React from "react"
import { useTranslation } from "react-i18next"
import "./appFooter.css"

function AppFooter() {
  const { t } = useTranslation()
  return (
    <footer className="app-footer">
      <span className="copyright small" style={{ color: "#fafafa" }}>
        © {t("my_name")}, {new Date().getFullYear()}
      </span>
      <a
        href="https://www.linkedin.com/in/igor-volchenok"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="./linkedin.svg"
          className="social-icons"
          alt="LinkedIn icon"
        />
      </a>
    </footer>
  )
}

export default AppFooter
