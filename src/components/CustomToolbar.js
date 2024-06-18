// src/components/CustomToolbar.js
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import arrow icons

const CustomToolbar = (toolbar) => {
  const goToBack = () => {
    toolbar.onNavigate('PREV');
  };

  const goToNext = () => {
    toolbar.onNavigate('NEXT');
  };

  const goToCurrent = () => {
    toolbar.onNavigate('TODAY');
  };

  const view = toolbar.view;
  const label = toolbar.label;

  return (
    <div className="custom-toolbar">
      <div className="today-button-container">
        <button className="today-button" onClick={goToCurrent}>
          Today
        </button>
      </div>

      <div className="navigation-buttons">
        <button className="nav-button" onClick={goToBack}>
          <FaChevronLeft />
        </button>
        <span className="current-date" onClick={goToCurrent}>
          {label}
        </span>
        <button className="nav-button" onClick={goToNext}>
          <FaChevronRight />
        </button>
      </div>
      
      <div className="view-buttons">
        <button
          className={`view-button ${view === 'month' ? 'active' : ''}`}
          onClick={() => toolbar.onView('month')}
        >
          Month
        </button>
        <button
          className={`view-button ${view === 'week' ? 'active' : ''}`}
          onClick={() => toolbar.onView('week')}
        >
          Week
        </button>
        <button
          className={`view-button ${view === 'day' ? 'active' : ''}`}
          onClick={() => toolbar.onView('day')}
        >
          Day
        </button>
      </div>
    </div>
  );
};

export default CustomToolbar;
