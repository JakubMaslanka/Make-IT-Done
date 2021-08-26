import React, { useContext } from 'react';
import TasksCreator from './Tasks_Creator/TasksCreator';
import TaskItem from './TaskItem';

import { TasksContext } from '../context/TasksContext';

function TaskManager() {
  const {
    tasks,
    addTask,
    editTask,
  } = useContext(TasksContext);

  return (
    <>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onComplete={() => editTask(task.id, { ...task, isCompleted: !task.isCompleted })}
          onFavorite={() => editTask(task.id, { ...task, isFavorite: !task.isFavorite })}
        />
      ))}
      <TasksCreator onCreate={(taskToCreat) => addTask(taskToCreat)} />
    </>
  );
}

export default TaskManager;
