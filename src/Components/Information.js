// src/Components/HeroSection.js
import React from 'react';
import photo from '../Graphic/Information.jpg';  

const Information = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>O mnie!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        <button>Przejdź do szczegółów</button>
      </div>
      <div className="hero-image">
      <img src={photo} alt="To ja!" />
      </div>
    </div>
  );
}

export default Information;
