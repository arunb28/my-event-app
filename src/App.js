// src/App.js
import React, { useState } from 'react';
import EventForm from './components/EventForm';
import EventList from './components/EventList';

const App = () => {
  const [events, setEvents] = useState([]);

  const handleEventCreated = (newEvent) => {
    // Update the events array with the new event
    setEvents([...events, newEvent]);
  };

  return (
    <div>
      <h1>Event App</h1>
      <EventForm onEventCreated={handleEventCreated} />
      <EventList events={events} />
    </div>
  );
};

export default App;
