// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const Navbar = ({ userType, onLogout }) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {userType === 'servis' && (
          <>
            <li>
              <Link to="/dashboard">Kontrolna tabla</Link>
            </li>
            {/* Dodajte ostale opcije koje su dostupne servisu */}
          </>
        )}
        {userType === 'vlasnik' && (
          <>
            <li>
              <Link to="/istorija-intervencija">Istorija intervencija</Link>
            </li>
            <li>
              <Link to="/sva-vozila">Sva vozila</Link>
            </li>
            {/* Dodajte ostale opcije koje su dostupne vlasniku vozila */}
          </>
        )}
        <li>
          <button onClick={onLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
