// EventCreationPage.js
import React, { useState } from 'react';
import './EventCreationPage.css';
import { AiOutlineCheckCircle, AiOutlineUsergroupAdd, AiOutlineEyeInvisible, AiOutlineSafetyCertificate } from 'react-icons/ai';
import LocationSelection from '../LocationSelection/LocationSelection';
import { useNavigate } from 'react-router-dom';
import DatePickerContainer from '../DatePickerContainer/DatePickerContainer';

const EventCreationPage = () => {
  const [eventName, setEventName] = useState('');
  const [location, setLocation] = useState('');
  const [tickets, setTickets] = useState(false);
  const [requireApproval, setRequireApproval] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [capacity, setCapacity] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };

  const handleLocationChange = (selectedLocation) => {
    setLocation(selectedLocation);
  };

  const handleEventCreation = () => {
    const newEvent = {
      id: new Date().getTime(),
      name: eventName,
      location,
      requireApproval,
      startDate,
      endDate,
    };
  
    setEvents(prevEvents => [...prevEvents, newEvent]);
  
    navigate('/event-list', { state: { events: [...events, newEvent] } });
  };
  

  return (
    <div>
      <h1>Event Creation Page</h1>
      
      <div className="event-name-card">
        <label>Event Name:</label>
        <input
          className="event-name-input"
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={handleEventNameChange}
        />
      </div>


      <div className="date-picker-card">
        <div className="date-picker-container">
          <DatePickerContainer
            label="Start Date"
            selectedDate={startDate}
            onDateChange={setStartDate}
            showCalendar
            toggleCalendar={() => {}}
          />
          <DatePickerContainer
            label="End Date"
            selectedDate={endDate}
            onDateChange={setEndDate}
            showCalendar
            toggleCalendar={() => {}}
          />
        </div>
      </div>

      <div className="location-selection-card">
        <div className="location-selection-container">
          <LocationSelection onLocationChange={handleLocationChange} />
        </div>
      </div>
      

      {/* Event Options Section */}
      <h3>Event Options</h3>
      <div className="event-options-card">
        <div className="event-option">
          <AiOutlineCheckCircle />
          <label>Tickets</label>
          <input type="checkbox" checked={tickets} onChange={() => setTickets(!tickets)} />
        </div>
        <div className="event-option">
          <AiOutlineSafetyCertificate />
          <label>Require Approval</label>
          <input type="checkbox" checked={requireApproval} onChange={() => setRequireApproval(!requireApproval)} />
        </div>
        <div className="event-option">
          <AiOutlineEyeInvisible />
          <label>Visibility</label>
          <input type="checkbox" checked={visibility} onChange={() => setVisibility(!visibility)} />
        </div>
        <div className="event-option">
          <AiOutlineUsergroupAdd />
          <label>Capacity</label>
          <input type="checkbox" checked={capacity} onChange={() => setCapacity(!capacity)} />
        </div>
      </div>

      <button onClick={handleEventCreation} className="create-event-button">
        Create Event
      </button>
    </div>
  );
};

export default EventCreationPage;
