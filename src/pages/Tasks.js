/* eslint-disable import/named */
import React from 'react';
import TaskManager from '../components/Tasks_List/TaskManager';
import TaskEditorWithRouter from '../components/TaskEditorWithRouter';

const Tasks = () => (
  <div>
    <TaskEditorWithRouter baseRoute="tasks">
      Tasks list View!
<<<<<<< HEAD
      <TaskManager />
=======
      <TaskManager height={760} />
>>>>>>> feature
    </TaskEditorWithRouter>
  </div>
);

export default Tasks;
