import React from 'react';
import { PomodoroManager } from '../components';
import { Layout } from './Layout';

export const Pomodoro = () => (
  <Layout baseRoute="pomodoro">
    <PomodoroManager />
  </Layout>
);
