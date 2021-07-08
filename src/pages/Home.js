import React from 'react';
import TaskList from '../components/TaskList';

const date = new Date();
const Home = () => (
  <>
    <div>
      <p>
        {date.toDateString()}
      </p>
      <h2>Welcome back,</h2>
      <h1>username!</h1>
      <h5>Yours taks for today:</h5>
    </div>
    <TaskList />
  </>
);

export default Home;
