import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TaskItem } from '../../Tasks_List/TaskItem';
import { ReactComponent as OptionsIcon } from '../../../icons/more_option_icon.svg';
import { ProjectCreator } from '../ProjectCreator';
import { ModalMenu } from '../../../utils/ModalMenu';

import { useConfirm, useTasks, useSoundEffect } from '../../../hooks';

import {
  Title,
  Header,
  Container,
  Description,
  ListContainer,
  TasksCountContainer,
  TasksListBackground,
} from './ProjectDropdown.styles';

export function ProjectDropdown({ project, tasks, editTask }) {
  const { handleTaskEdit, handleProjectRemove } = useTasks();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isEditorOpen, setEditorOpen] = useState(false);
  const [playSound] = useSoundEffect();

  const tasksFromProject = tasks.filter((task) => task.projectId === project.uniqueProjectId);

  const editorToggle = () => setEditorOpen((prevState) => !prevState);
  const openDropdown = (e) => {
    if (e.target.nodeName === 'DIV' && tasksFromProject.length >= 1) {
      setDropdownOpen((prevState) => !prevState);
    }
  };

  const confirmAction = () => {
    if (tasksFromProject.length > 0) {
      handleProjectRemove(project.id);
      tasksFromProject.forEach(
        (task) => handleTaskEdit(
          task.id, {
            ...task,
            projectId: null,
            projectTitle: null,
          },
        ),
      );
    } else {
      handleProjectRemove(project.id);
    }
  };

  const { confirmTrigger, ConfirmContainer } = useConfirm(confirmAction, 'Project deleting', `The project "${project.title}" will be permanently deleted. ${tasksFromProject.length > 0 ? `You've ${tasksFromProject.length} tasks assign to it! Are you sure?` : 'Are you sure?'}`);

  return (
    <>
      {isEditorOpen && (
        <ModalMenu
          title="Edit your project!"
          onClose={editorToggle}
        >
          <ProjectCreator
            closeMenu={editorToggle}
            projectToEdit={project}
            tasksToEdit={tasksFromProject}
            confirmTrigger={confirmTrigger}
          />
        </ModalMenu>
      )}
      <Container color={project.projectColor} onClick={openDropdown}>
        <TasksCountContainer color={project.projectColor}>
          {tasksFromProject.length}
        </TasksCountContainer>
        <ConfirmContainer />
        <Header>
          <Title>{project.title}</Title>
          <OptionsIcon fill="#FFFFFF" onClick={editorToggle} />
        </Header>
        <Description>{project.description}</Description>
      </Container>
      {dropdownOpen && (
        <TasksListBackground color={project.projectColor}>
          <ListContainer>
            {tasksFromProject.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onComplete={() => {
                  playSound(!task.isCompleted);
                  editTask(task.id, { ...task, isCompleted: !task.isCompleted });
                }}
                onFavorite={() => editTask(task.id, { ...task, isFavorite: !task.isFavorite })}
                itemColor={project.projectColor}
              />
            ))}
          </ListContainer>
        </TasksListBackground>
      )}
    </>
  );
}

ProjectDropdown.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    projectColor: PropTypes.string,
    uniqueProjectId: PropTypes.string,
  }).isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  editTask: PropTypes.func.isRequired,
};
