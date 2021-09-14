import React from 'react';
import { Header } from './pages.styles';
import { ProjectManager } from '../components';
import { Layout } from './Layout';

export const Projects = () => (
  <Layout baseRoute="projects">
    <Header>
      <h4>Projects:</h4>
    </Header>
    <ProjectManager />
  </Layout>
);
