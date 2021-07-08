import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TaskList from './TaskList';
import Navigation from './Navigation';

function App() {
  const date = new Date();
  return (
    <BrowserRouter>
      <div className="App">
        <p>
          {date.toDateString()}
        </p>
        <h2>Welcome back,</h2>
        <h1>username!</h1>
        <h5>Yours taks for today:</h5>
        <TaskList />
        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
