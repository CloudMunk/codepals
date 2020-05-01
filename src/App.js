import React from 'react';
import './App.scss';
import HomePage from './pages/HomePage/HomePage.page'

function App() {
  return (
    <div className="App">
      <header>
            <div className="header-section">
                <p className="navbarItemOne">Home</p>
            </div>
            <div className="header-section">
                <p className="navbarItems">Events</p>
            </div>
            <div className="header-section">
                <p className="navbarItems">Register</p>
            </div>
            <div className="header-section">
                <p className="navbarItems">Log In</p> 
            </div>
        </header>
      <HomePage />
    </div>
  );
}

export default App;
