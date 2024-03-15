import React from "react"
import "./appFooter.css"

function AppFooter() {
  return (
    <footer className="app-footer">
      <div>
        <span className="small" style={{ color: "#fafafa" }}>
          © Игорь Волченок, {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}

export default AppFooter
