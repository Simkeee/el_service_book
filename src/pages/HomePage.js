// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home">
      <h1>Dobrodošli u Elektronsku Tehničku Knjižicu za Automobil</h1>
      <p>
        Ovde možete pratiti istoriju intervencija na vašem automobilu u servisu.
      </p>

      <div className="action-buttons">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
