// src/components/EventForm.js
import React, { useState } from 'react';

const EventForm = ({ onEventCreated }) => {
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');
  const [location, setLocation] = useState('');
  const [tickets, setTickets] = useState('');
  const [approvalRequired, setApprovalRequired] = useState(false);
  const [capacity, setCapacity] = useState('');
  const [visibility, setVisibility] = useState('public');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEvent = {
      startDate,
      startTime,
      endDate,
      endTime,
      location,
      tickets,
      approvalRequired,
      capacity,
      visibility,
    };

    // Simulate API call to create an event
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Event created:', newEvent);

    // Notify parent component
    onEventCreated(newEvent);

    // Clear form fields
    setStartDate('');
    setStartTime('');
    setEndDate('');
    setEndTime('');
    setLocation('');
    setTickets('');
    setApprovalRequired(false);
    setCapacity('');
    setVisibility('public');
  };

  return (
    <div>
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Start Date:
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </label>
        <br />
        <label>
          Start Time:
          <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
        </label>
        <br />
        <label>
          End Date:
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </label>
        <br />
        <label>
          End Time:
          <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
        </label>
        <br />
        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>
        <br />
        <label>
          Tickets:
          <input type="text" value={tickets} onChange={(e) => setTickets(e.target.value)} />
        </label>
        <br />
        <label>
          Require Approval:
          <input
            type="checkbox"
            checked={approvalRequired}
            onChange={() => setApprovalRequired(!approvalRequired)}
          />
        </label>
        <br />
        <label>
          Capacity:
          <input type="text" value={capacity} onChange={(e) => setCapacity(e.target.value)} />
        </label>
        <br />
        <label>
          Visibility:
          <select value={visibility} onChange={(e) => setVisibility(e.target.value)}>
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </label>
        <br />
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default EventForm;
