// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const HomePage = () => {
  return (
    <div className="home">
      <div className="container">
        <h1 className="text-center">Dobrodošli u Elektronsku Tehničku Knjižicu za Automobil</h1>
        <p className="text-center">
          Ovde možete pratiti istoriju intervencija na vašem automobilu u servisu.
        </p>

        <div className="text-center action-buttons">
          <Link to="/user-login">
            <button className="btn btn-primary">User Login</button>
          </Link>
          <Link to="/service-login">
            <button className="btn btn-warning">Service Login</button>
          </Link>
          <Link to="/register">
            <button className="btn btn-secondary">Register</button>
          </Link>
        </div>

        <p className="mt-4">
          Elektronska Tehnička Knjižica za Automobil je inovativna klijentsko-serverska web aplikacija čiji je osnovni cilj praćenje istorije intervencija na vozilima u okviru servisa.
          Aplikacija pruža korisnicima jednostavan i efikasan način za upravljanje podacima o vozilima, intervencijama i servisima. Na početnoj stranici, korisnici se susreću sa kratkim uvodom o aplikaciji i imaju opciju da se prijave ili registruju. Registracija se vrši popunjavanjem forme koja sadrži osnovne informacije o klijentu i servisu.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
