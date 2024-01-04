// CalendarDay.js
import React, { useState } from 'react';

const CalendarDay = ({ day, onAddData }) => {
  const [data, setData] = useState('');
  const [alarmTime, setAlarmTime] = useState('');

  const handleAddData = () => {
    onAddData(day, data, alarmTime);
    // Dodajte logiku za postavljanje alarma
  };

  return (
    <div className="calendar-day">
      <p>{day}</p>
      <textarea
        placeholder="Unesite podatke..."
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <input
        type="time"
        value={alarmTime}
        onChange={(e) => setAlarmTime(e.target.value)}
      />
      <button onClick={handleAddData}>Dodaj podatke</button>
    </div>
  );
};

export default CalendarDay;
