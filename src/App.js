/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
// eslint-disable-next-line
import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Calendar from './pages/Calendar';
import Pomodoro from './pages/Pomodoro';
// import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tasks" component={Tasks} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/pomodoro" component={Pomodoro} />
        {/* <Route component={NotFound} /> - 404 error handler */}
      </Switch>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
