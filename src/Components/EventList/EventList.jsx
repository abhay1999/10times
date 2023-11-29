// EventList.js
import React from 'react';
import './EventList.css'; // Import your custom CSS file for styling

const EventList = ({ events }) => {
  return (
    <div className="event-table-container">
      <h2>Event Listing Page</h2>
      <table className="event-table">
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Start Date</th>
            {/* <th>Start Time</th> */}
            <th>End Date</th>
            {/* <th>End Time</th> */}
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(events) &&
            events.map((event) => (
              <tr key={event.id}>
                <td>{event.name}</td>
                <td>{event.startDate.toDateString()}</td>
                {/* <td>{event.startTime}</td> */}
                <td>{event.endDate.toDateString()}</td>
                {/* <td>{event.endTime}</td> */}
                <td>{event.location}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventList;
