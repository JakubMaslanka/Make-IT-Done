import React, { useState } from 'react';
import TasksCreator from './Tasks_Creator/TasksCreator';
import TaskItem from './TaskItem';
import TaskDetailsMenu from './TaskDetailsMenu';

function TaskManager() {
  const [tasks, setTask] = useState([
    {
      title: 'Test', isCompleted: false, id: 5, deadline: '7/21/2021',
    },
    { title: 'Test2', isCompleted: true, id: 55 },
    { title: 'Test3', isCompleted: false, id: 555 },
  ]);

  const [currentEditingTaskId, setCurrentEditingTaskId] = useState(null);

  const addTask = (task) => {
    setTask((prevState) => ([task, ...prevState]));
  };

  const handleCreate = (createdTask) => {
    addTask(createdTask);
  };

  const toggleComplete = (taskIdx) => {
    setTask(tasks.map((task, index) => (
      index === taskIdx
        ? { ...task, isCompleted: !task.isCompleted }
        : task)));
  };

  const removeTask = (idToRemove) => {
    setCurrentEditingTaskId(null);
    setTask(tasks.filter((task) => idToRemove !== task.id));
  };

  // Feature To Completed
  // const handleEdit = (e) => {
  //   console.log(e.target.value);
  // };

  return (
    <>
      {currentEditingTaskId
        ? (
          <TaskDetailsMenu
            id={currentEditingTaskId}
            tasks={tasks}
            closeDetails={() => setCurrentEditingTaskId(null)}
            // onEdit={() => console.log('Editing')}
            onDelete={() => removeTask(currentEditingTaskId)}
          />
        )
        : ''}
      {tasks.map((task, idx) => (
        <TaskItem
          key={task.id}
          openDetails={() => setCurrentEditingTaskId(task.id)}
          onComplete={() => toggleComplete(idx)}
          title={task.title}
          isCompleted={task.isCompleted}
          deadline={task.deadline}
        />
      ))}
      <TasksCreator onCreate={handleCreate} />
    </>
  );
}

export default TaskManager;
