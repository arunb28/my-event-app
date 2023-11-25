// src/components/EventList.js
import React from 'react';

const EventList = ({ events }) => {
  // Ensure that events is defined before attempting to map over it
  const eventsToRender = events || [];

  return (
    <div>
      <h2>Event List</h2>
      <ul>
        {eventsToRender.map((event, index) => (
          <li key={index}>
            <strong>Start Date:</strong> {event.startDate} - {event.startTime}
            <br />
            <strong>End Date:</strong> {event.endDate} - {event.endTime}
            <br />
            <strong>Location:</strong> {event.location}
            <br />
            <strong>Tickets:</strong> {event.tickets}
            <br />
            <strong>Approval Required:</strong> {event.approvalRequired ? 'Yes' : 'No'}
            <br />
            <strong>Capacity:</strong> {event.capacity}
            <br />
            <strong>Visibility:</strong> {event.visibility}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
