import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { useAuth } from './hooks/useAuth';
import {
  Home,
  Tasks,
  Projects,
  Calendar,
  Pomodoro,
} from './pages';

import TasksProvider from './context/TasksContext';

export default function AuthenticatedApp() {
  return (
    <Provider store={store}>
      <TasksProvider>
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/tasks" component={Tasks} />
        <PrivateRoute path="/projects" component={Projects} />
        <PrivateRoute path="/calendar" component={Calendar} />
        <PrivateRoute path="/pomodoro" component={Pomodoro} />
      </TasksProvider>
    </Provider>
  );
}

function PrivateRoute({ ...rest }) {
  const { user } = useAuth();
  const { path, component } = { ...rest };
  return (
    <>
      {user ? (
        <Route path={path} component={component} />
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
}
