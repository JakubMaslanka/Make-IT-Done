import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import TasksContextProvider from './components/context/TasksContext';

ReactDOM.render(
  <TasksContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TasksContextProvider>,
  document.getElementById('root'),
);
