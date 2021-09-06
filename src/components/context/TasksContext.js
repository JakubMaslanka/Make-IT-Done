import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const TasksContext = createContext();

export default function TasksContextProvider({ children }) {
  const [tasks, setTask] = useState([
    {
      title: 'Test',
      isCompleted: false,
      id: 5,
      isFavorite: false,
      timeStump: '2021-07-30T18:49:42+02:00',
      deadline: '7/21/2021',
      projectId: '787ad937-d4b8-4180-90d5-d48266dee629',
      projectTitle: 'To jest testowy projekt',
      pomodoro: {
        est: 2,
        done: 0,
      },
    },
    {
      title: 'Test2',
      isCompleted: true,
      isFavorite: true,
      timeStump: '2021-08-01T18:49:42+02:00',
      id: 55,
    },
    {
      title: 'Test3',
      isCompleted: false,
      isFavorite: true,
      timeStump: '2021-08-05T18:49:42+02:00',
      id: 555,
      deadline: '8/11/2021',
      projectId: '787ad937-d4b8-4180-90d5-d48266dee629',
      projectTitle: 'To jest testowy projekt',
      pomodoro: {
        est: 3,
        done: 0,
      },
    },
  ]);

  const [projects, setProjects] = useState([
    {
      description: 'Krótki opis',
      id: 366,
      projectColor: 'hsl(320, 75%, 42%)',
      title: 'To jest testowy projekt',
      uniqueProjectId: '787ad937-d4b8-4180-90d5-d48266dee629',
    },
    {
      description: '',
      id: 376,
      projectColor: 'hsl(230, 75%, 42%)',
      title: 'Bez opisu',
      uniqueProjectId: 'b80dbb67-c01d-43b8-87a7-b8d930cebfe2',
    },
  ]);

  const addTask = (task) => {
    setTask((prevState) => ([task, ...prevState]));
  };

  const editTask = (taskIdx, editedTask) => {
    setTask(tasks.map((task) => (task.id === taskIdx ? editedTask : task)));
  };

  const removeTask = (idToRemove) => {
    setTask(tasks.filter((task) => idToRemove !== task.id));
  };

  return (
    <TasksContext.Provider value={{
      tasks,
      setTask,
      addTask,
      editTask,
      removeTask,
      projects,
      setProjects,
    }}
    >
      {children}
    </TasksContext.Provider>
  );
}

TasksContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
