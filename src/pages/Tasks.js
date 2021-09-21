import React from 'react';
import { Header } from './pages.styles';
import { TaskManager } from '../components';
import { Layout } from './Layout';
import { useDocumentTitle } from '../hooks';

export const Tasks = () => {
  useDocumentTitle('All Tasks - Make-IT-Done');
  return (
    <Layout baseRoute="tasks">
      <Header>
        <h4>All tasks:</h4>
      </Header>
      <TaskManager isAllTaskView height={window.innerHeight - 240} />
    </Layout>
  );
};
