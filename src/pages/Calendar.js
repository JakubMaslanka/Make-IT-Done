import React from 'react';
import CalendarManager from '../components/Calendar/CalendarManager';
import TaskEditorWithRouter from '../components/TaskEditorWithRouter';

const Calendar = () => (
  <TaskEditorWithRouter baseRoute="calendar">
    <CalendarManager />
  </TaskEditorWithRouter>
);

export default Calendar;
