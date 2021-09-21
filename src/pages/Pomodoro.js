import React from 'react';
import { PomodoroManager } from '../components';
import { Layout } from './Layout';
import { useDocumentTitle } from '../hooks';

export const Pomodoro = () => {
  useDocumentTitle('Pomodoro Technique - Make-IT-Done');
  return (
    <Layout baseRoute="pomodoro">
      <PomodoroManager />
    </Layout>
  );
};
