import React, { useContext } from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import AuthProvider, { AuthContext } from './components/context/AuthContext';

import Landing from './pages/Landing';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Projects from './pages/Projects';
import Calendar from './pages/Calendar';
import Pomodoro from './pages/Pomodoro';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/tasks" component={Tasks} />
          <PrivateRoute path="/projects" component={Projects} />
          <PrivateRoute path="/calendar" component={Calendar} />
          <PrivateRoute path="/pomodoro" component={Pomodoro} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

function PrivateRoute({ ...rest }) {
  const { user } = useContext(AuthContext);
  const { path, component } = { ...rest };
  return (
    <>
      {user ? (
        <Route path={path} component={component} />
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
}
