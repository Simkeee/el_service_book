// UserDashboard.js
import React from 'react';
import { useAuth } from '../auth/auth';
import '../../App.css';

const UserDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="user-dashboard row">
      <h2 className="text-center mb-4">Korisnički panel</h2>

      <div className="search-bar col-md-12">
        <form className="form-inline">
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="searchInput" className="sr-only">Pretraga</label>
            <input
              type="text"
              className="form-control search-input"
              id="searchInput"
              placeholder="Unesite tekst za pretragu"
            />
          </div>
        </form>
      </div>

      <div className="user-info col-md-6 mt-4">
        <p><strong>Ime:</strong> {user ? user.firstName : ''}</p>
        <p><strong>Prezime:</strong> {user ? user.lastName : ''}</p>
        <p><strong>Firma:</strong> {user ? user.company : ''}</p>
      </div>

      <div className="user-actions col-md-6 mt-4">
        <div className="text-center action-buttons row">
          <button className="btn">Istorija intervencija</button>
          <button className="btn">Pregled vozila</button>
          <button className="btn">Edit user data</button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
