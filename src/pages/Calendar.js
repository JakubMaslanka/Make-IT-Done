import React from 'react';
import { Navigation, CalendarManager } from '../components';

import { TaskEditorWithRouter } from '../components/utilities/TaskEditorWithRouter';

const Calendar = () => (
  <>
    <TaskEditorWithRouter baseRoute="calendar">
      <CalendarManager />
    </TaskEditorWithRouter>
    <Navigation />
  </>
);

export default Calendar;
