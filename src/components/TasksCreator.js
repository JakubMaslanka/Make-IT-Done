/* eslint-disable react/prop-types */
import React, { useRef } from 'react';

function TasksCreator({ onCreate }) {
  const tasksTitle = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({
      id: new Date().getMilliseconds(),
      title: tasksTitle.current.value,
      timeStump: new Date(),
    });
    tasksTitle.current.value = '';
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" ref={tasksTitle} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TasksCreator;
