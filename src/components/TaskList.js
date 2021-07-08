import React, { useState } from 'react';
import TasksCreator from './TasksCreator';
import Task from './Task';

function TaskList() {
  const [tasks, setTask] = useState([
    { title: 'Test', id: 5 },
    { title: 'Test2', id: 55 },
    { title: 'Test3', id: 555 },
  ]);

  const addTask = (task) => {
    setTask((prevState) => ([task, ...prevState]));
  };

  const handleCreate = (createdTask) => {
    addTask(createdTask);
  };

  return (
    <>
      <div>
        {tasks.map((task) => (
          <Task key={task.id} title={task.title} />
        ))}
      </div>
      <TasksCreator onCreate={handleCreate} />
    </>
  );
}

export default TaskList;
