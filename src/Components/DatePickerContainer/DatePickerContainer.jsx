// DatePickerContainer.js
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './DatePickerContainer.css';

const DatePickerContainer = ({ label, selectedDate, onDateChange, showCalendar, toggleCalendar }) => {
  const formattedDate = selectedDate.toLocaleDateString();

  return (
    <div className="date-picker-container">
      <label>{label}:</label>
      <div className="date-time-picker">
        <div className="date-time-inputs">
          <div className="formatted-date" onClick={toggleCalendar}>
            {formattedDate}
          </div>
          {showCalendar && <Calendar onChange={onDateChange} value={selectedDate} />}
        </div>
      </div>
    </div>
  );
};

export default DatePickerContainer;
