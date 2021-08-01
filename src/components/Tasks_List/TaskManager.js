import React, { useState } from 'react';
import TasksCreator from './Tasks_Creator/TasksCreator';
import TaskItem from './TaskItem';
import TaskEditor from './TaskEditor';

function TaskManager() {
  const [tasks, setTask] = useState([
    {
      title: 'Test', isCompleted: false, id: 5, isFavorite: false, timeStump: '2021-07-30T18:49:42+02:00', deadline: '7/21/2021',
    },
    {
      title: 'Test2', isCompleted: true, isFavorite: true, timeStump: '2021-08-01T18:49:42+02:00', id: 55,
    },
    {
      title: 'Test3', isCompleted: false, isFavorite: true, timeStump: '2021-08-05T18:49:42+02:00', id: 555,
    },
  ]);
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
          title={task.title}
          deadline={task.deadline}
          isCompleted={task.isCompleted}
          isFavorite={task.isFavorite}
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
