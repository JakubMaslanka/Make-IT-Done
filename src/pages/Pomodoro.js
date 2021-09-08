import React from 'react';
import { PomodoroManager, Navigation } from '../components';

import { TaskEditorWithRouter } from '../components/utilities/TaskEditorWithRouter';

const Pomodoro = () => (
  <>
    <TaskEditorWithRouter baseRoute="pomodoro">
      <PomodoroManager />
    </TaskEditorWithRouter>
    <Navigation />
  </>
);

export default Pomodoro;
