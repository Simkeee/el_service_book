import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useAuth } from '../auth/auth';
import '../../App.css';

const ServiceDashboard = () => {
  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="service-dashboard row">
      <h2 className="text-center mb-4">Service Dashboard</h2>

      <div className="search-bar col-md-12">
        <form className="form-inline">
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="searchInput" className="sr-only">Search</label>
            <input
              type="text"
              className="form-control search-input"
              id="searchInput"
              placeholder="Enter text for search"
            />
          </div>
        </form>
      </div>

      <div className="service-info col-md-6 mt-4">
        <p><strong>Company:</strong> {user ? user.company : ''}</p>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
        />
      </div>

      <div className="service-actions col-md-6 mt-4">
        <div className="text-center action-buttons row">
          <button className="btn">All Vehicles</button>
          <button className="btn">New Vehicle</button>
          <button className="btn">Intervention History</button>
          <button className="btn">Edit User Data</button>
          <button className="btn">Edit Service Data</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDashboard;