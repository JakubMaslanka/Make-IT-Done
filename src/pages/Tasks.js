/* eslint-disable import/named */
import React from 'react';
import TaskManager from '../components/Tasks_List/TaskManager';
import TaskEditorWithRouter from '../components/TaskEditorWithRouter';

const Tasks = () => (
  <div>
    <TaskEditorWithRouter baseRoute="tasks">
      Tasks list View!
      <TaskManager height={760} />
    </TaskEditorWithRouter>
  </div>
);

export default Tasks;
