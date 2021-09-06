import React from 'react';
import { CalendarManager } from '../components';
import { TaskEditorWithRouter } from '../components/utilities/TaskEditorWithRouter';

const Calendar = () => (
  <TaskEditorWithRouter baseRoute="calendar">
    <CalendarManager />
  </TaskEditorWithRouter>
);

export default Calendar;
