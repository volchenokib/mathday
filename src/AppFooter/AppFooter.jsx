import React from "react"
import "./appFooter.css"

function AppFooter() {
  return (
    <footer className="app-footer">
      <div className="footer-inner">
        <span className="text-center">
          © Игорь Волченок, {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}

export default AppFooter
