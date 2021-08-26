import React from 'react';
import PomodoroManager from '../components/Pomodoro/PomodoroManager';
import TaskEditorWithRouter from '../components/TaskEditorWithRouter';

const Pomodoro = () => (
  <div>
    <TaskEditorWithRouter baseRoute="pomodoro">
      <PomodoroManager />
    </TaskEditorWithRouter>
  </div>
);

export default Pomodoro;
