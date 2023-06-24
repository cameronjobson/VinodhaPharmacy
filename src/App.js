// DateCalc.js
import './App.css';  // Import the CSS
import React, { useState } from 'react';
import { addDays, subDays } from 'date-fns';

function DateCalc() {
  const [FD, setFD] = useState(new Date()); // Default to current date
  const [DS, setDS] = useState(0);
  const [patientPickUpDate, setPatientPickUpDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate the new date
    const newDate = subDays(addDays(FD, DS), 2);

    // Set the new date
    setPatientPickUpDate(newDate);
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label className="form-label">
          FD:
          <input className="input" type="date" onChange={e => setFD(new Date(`${e.target.value}T12:00:00`))} />
        </label>
        <label className="form-label">
          DS:
          <input className="input" type="number" onChange={e => setDS(Number(e.target.value))} />
        </label>
        <button className="button" type="submit">Calculate</button>
      </form>
      <div className="patient-pickup-date">
        Patient pick up date: {patientPickUpDate.toDateString()}
      </div>
    </div>
  );
}

export default DateCalc;
