import React from 'react';
import AppHeader from './AppHeader';
import AppMain from './AppMain';
import AppFooter from './AppFooter';

function App() {
  return (
    <>
      <div className="app-wrapper">
        <AppHeader />
        <AppMain />
      </div>
      <AppFooter />
    </>
   
  )
}

export default App;
