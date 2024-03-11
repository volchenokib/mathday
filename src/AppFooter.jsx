import React from 'react';

function AppFooter() {
  return (
    <footer className="app-footer">
    <div className="footer-inner">
      <span className="text-center">
        © {new Date().getFullYear()}. Все права защищены.
      </span>
    </div>
  </footer>
  )
}

export default AppFooter;
