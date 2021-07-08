/* eslint-disable react/prop-types */
import React from 'react';

function Task({ title }) {
  return (
    <div className="App">
      <input type="checkbox" />
      <h3>{title}</h3>
      <button type="button">Menu</button>
    </div>
  );
}

export default Task;
