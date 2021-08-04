/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { createContext, useState } from 'react';

export const TasksContext = createContext();

const TasksContextProvider = (props) => {
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

  return (
    <TasksContext.Provider value={{ tasks, setTask }}>
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksContextProvider;
