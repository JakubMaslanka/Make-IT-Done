import React from 'react';
import './App.css';
import TaskList from './TaskList';

function App() {
  const date = new Date();
  return (
    <div className="App">
      <p>
        {date.toDateString()}
      </p>
      <h2>Welcome back,</h2>
      <h1>username!</h1>
      <h5>Yours taks for today:</h5>
      <TaskList />
    </div>
  );
}

export default App;
