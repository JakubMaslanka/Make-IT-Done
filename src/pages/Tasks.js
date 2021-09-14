import React from 'react';
import { Header } from './pages.styles';
import { TaskManager } from '../components';
import { Layout } from './Layout';

export const Tasks = () => (
  <Layout baseRoute="tasks">
    <Header>
      <h4>All tasks:</h4>
    </Header>
    <TaskManager withSearchBar height={window.innerHeight - 260} />
  </Layout>
);
