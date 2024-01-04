// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png'; // Podesite putanju prema stvarnom mestu vašeg logo fajla

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          {/* Prva kolona za logo */}
          <div className="col-md-6">
            <Link to="/">
              <img src={logo} alt="Logo" className="logo" />
            </Link>
          </div>

          {/* Druga kolona za naslov */}
          <div className="col-md-6">
            <h2>Pratite održavanje svog vozila</h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
