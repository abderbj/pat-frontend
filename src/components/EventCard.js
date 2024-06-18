// src/components/EventCard.js
import React from 'react';
import './EventCard.css';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <img src={event.image} alt={event.title} className="event-image" />
      <div className="event-details">
        <h3 className="event-title">{event.title}</h3>
        <p className="event-date">{event.date}</p>
        <p className="event-address">{event.address}</p>
        <p className="event-country">{event.country}</p>
      </div>
    </div>
  );
};

export default EventCard;
