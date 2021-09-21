import React from 'react';
import { Header } from './pages.styles';
import { ProjectManager } from '../components';
import { Layout } from './Layout';
import { useDocumentTitle } from '../hooks';

export const Projects = () => {
  useDocumentTitle('Projects - Make-IT-Done');
  return (
    <Layout baseRoute="projects">
      <Header>
        <h4>Projects:</h4>
      </Header>
      <ProjectManager />
    </Layout>
  );
};
