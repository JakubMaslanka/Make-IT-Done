import React, { useContext } from 'react';

import { ProjectDropdown } from '../ProjectDropdown';
import { ProjectCreator } from '../ProjectCreator';

import { Container } from './ProjectManager.styles';
import { TasksContext } from '../../context/TasksContext';

export function ProjectManager() {
  const {
    tasks,
    projects,
    setProjects,
    editTask,
  } = useContext(TasksContext);

  return (
    <Container>
      <ProjectCreator projectCreate={setProjects} />
      {projects.map((project) => (
        <ProjectDropdown
          projectEdit={setProjects}
          key={project.id}
          project={project}
          tasks={tasks}
          editTask={editTask}
        />
      ))}
    </Container>
  );
}
