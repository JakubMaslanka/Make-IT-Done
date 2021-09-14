import React, { useState } from 'react';
import { ModalMenu } from '../../../utils/ModalMenu';
import { ProjectDropdown } from '../ProjectDropdown';
import { ProjectCreator } from '../ProjectCreator';
import { CircleLoader } from '../../../utils/Loaders/Loaders';
import { Container, ProjectCreatorButton } from './ProjectManager.styles';
import { useTasks } from '../../../hooks';

export function ProjectManager() {
  const {
    tasks,
    isProjectsLoading,
    handleTaskEdit,
    projects,
    handleProjectCreate,
    handleProjectEdit,
    handleRemoveProject,
  } = useTasks();

  const [modalmenuOpen, setModalmenuOpen] = useState(false);
  const modalmenuToggle = () => setModalmenuOpen((prevState) => !prevState);

  return (
    <Container>
      <ProjectCreatorButton onClick={modalmenuToggle}>Add Project</ProjectCreatorButton>
      {modalmenuOpen && (
      <ModalMenu
        title="Add your project!"
        onClose={modalmenuToggle}
      >
        <ProjectCreator
          projectCreate={handleProjectCreate}
          closeMenu={modalmenuToggle}
        />
      </ModalMenu>
      )}
      {
        isProjectsLoading
          ? <CircleLoader />
          : (
            projects.map((project) => (
              <ProjectDropdown
                projectEdit={handleProjectEdit}
                projectRemove={handleRemoveProject}
                key={project.id}
                project={project}
                tasks={tasks}
                editTask={handleTaskEdit}
              />
            ))
          )
      }
    </Container>
  );
}
