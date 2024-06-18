import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './EventsCalendar.css';
import CustomToolbar from './CustomToolbar';

const localizer = momentLocalizer(moment);

const events = [
  {
    id: 0,
    title: 'Design Conference',
    start: new Date(2024, 6, 3, 10, 0),
    end: new Date(2024, 6, 4, 12, 0),
    allDay: true,
  },
  {
    id: 1,
    title: 'Weekend Festival',
    start: new Date(2024, 6, 16, 10, 0),
    end: new Date(2024, 6, 18, 12, 0),
    allDay: true,
  },
  {
    id: 2,
    title: 'Glastonbury Festival',
    start: new Date(2024, 6, 20, 11, 0),
    end: new Date(2024, 6, 23, 12, 0),
    allDay: true,
  },
  {
    id: 3,
    title: 'Glastonbury Festival',
    start: new Date(2024, 6, 24, 10, 0),
    end: new Date(2024, 6, 26, 12, 0),
    allDay: true,
  },
];

const colors = ['#e99151', '#51e9a1', '#a151e9', '#e951a1', '#51a1e9'];

const EventsCalendar = ({events}) => {
  const eventStyleGetter = (event) => {
    const backgroundColor = colors[event.id % colors.length];
    const style = {
      border: 'none',
      borderRadius: '0px',
      textAlign: 'center',
      fontSize: '10px',
      padding: '8px 7px',
      fontWeight: 600,
      backgroundColor: `${backgroundColor}34`, // 34 is the opacity value
      borderLeft: `2px solid ${backgroundColor}`,
      color: backgroundColor,
    };
    return {
      style: style,
    };
  };

  return (
    <div style={{ height: '90vh' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%', margin: '50px' }}
        views={['month', 'week', 'day']}
        defaultView="month"
        components={{
          toolbar: CustomToolbar,
        }}
        eventPropGetter={eventStyleGetter}
      />
    </div>
  );
};

export default EventsCalendar;
