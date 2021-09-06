import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import { Navigation } from './components';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Projects from './pages/Projects';
import Calendar from './pages/Calendar';
import Pomodoro from './pages/Pomodoro';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={Home} />
        <Route path="/tasks" component={Tasks} />
        <Route path="/projects" component={Projects} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/pomodoro" component={Pomodoro} />
        <Route component={NotFound} />
      </Switch>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
