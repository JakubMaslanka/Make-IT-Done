import React, { useContext, useState } from 'react';
import TasksCreator from './Tasks_Creator/TasksCreator';
import TaskItem from './TaskItem';
import TaskEditor from './TaskEditor';

import { TasksContext } from '../context/TasksContext';

function TaskManager() {
  const { tasks, setTask } = useContext(TasksContext);

  const [currentEditingTaskId, setCurrentEditingTaskId] = useState(null);

  const addTask = (task) => {
    setTask((prevState) => ([task, ...prevState]));
  };

  const editTask = (taskIdx, editedTask) => {
    setTask(tasks.map((task) => (task.id === taskIdx ? editedTask : task)));
  };

  const removeTask = (idToRemove) => {
    setCurrentEditingTaskId(null);
    setTask(tasks.filter((task) => idToRemove !== task.id));
  };

  return (
    <>
      {currentEditingTaskId
        && (
          <>
            <TaskEditor
              id={currentEditingTaskId}
              tasks={tasks}
              onEdit={editTask}
              onClose={() => setCurrentEditingTaskId(null)}
              onDelete={() => removeTask(currentEditingTaskId)}
            />
          </>
        )}
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          openEditor={() => setCurrentEditingTaskId(task.id)}
          onComplete={() => editTask(task.id, { ...task, isCompleted: !task.isCompleted })}
          onFavorite={() => editTask(task.id, { ...task, isFavorite: !task.isFavorite })}
        />
      ))}
      <TasksCreator onCreate={(taskToCreat) => addTask(taskToCreat)} />
    </>
  );
}

export default TaskManager;
