import EventsCalendar from '../components/EventsCalendar' ;
import EventList from '../components/EventList';
import React from "react";
import './Calendar.css';

function EventsCalendarPage({ events }){
    return (
        <div className='EventsCalendarPage' >
            <EventList events={events} className='EventListComponent'/>
            <EventsCalendar events={events} className='EventsCalendarComponent' />
            
        </div>
    );
}
export default EventsCalendarPage;