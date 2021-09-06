import React from 'react';
import { PomodoroManager } from '../components';
import { TaskEditorWithRouter } from '../components/utilities/TaskEditorWithRouter';

const Pomodoro = () => (
  <TaskEditorWithRouter baseRoute="pomodoro">
    <PomodoroManager />
  </TaskEditorWithRouter>
);

export default Pomodoro;
