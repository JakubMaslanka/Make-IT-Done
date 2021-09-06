import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TaskItem } from '../../Tasks_List/TaskItem';

import { ReactComponent as ArrowDownIcon } from '../../utilities/assets/arrow_down_icon.svg';
import { ReactComponent as CloseIcon } from '../../utilities/assets/close_icon.svg';
import { ReactComponent as TrashIcon } from '../../utilities/assets/trash_icon.svg';

import {
  Container,
  Header,
  TitleEditor,
  Title,
  Description,
  TasksListBackground,
  ListContainer,
} from './ProjectDropdown.styles';

import { useClickOutsideHook } from '../../utilities/useClickOutsideHook';
import { useConfirm } from '../../utilities/useConfirm';

export function ProjectDropdown({
  project, tasks, editTask, projectEdit,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [projectEditing, setProjectEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(project.title);

  const tasksFromProject = tasks.filter((task) => task.projectId === project.uniqueProjectId);

  const handleTitleEdit = () => {
    projectEdit((prevProjects) => (prevProjects.map(
      (p) => (p.uniqueProjectId === project.uniqueProjectId
        ? { ...project, title: newTitle }
        : p),
    )));
  };

  const handleProjectRemove = () => {
    projectEdit((prevProjects) => (prevProjects.filter(
      (p) => project.uniqueProjectId !== p.uniqueProjectId,
    )));
    setProjectEditing(false);
  };

  const { confirmTrigger, ConfirmContainer, isDialogOpen } = useConfirm(handleProjectRemove, 'Project deleting', `The project "${project.title}" will be permanently deleted. Are you sure?`);

  const domNode = useClickOutsideHook(() => {
    if (!isDialogOpen) {
      handleTitleEdit();
      setProjectEditing(false);
    }
  });

  return (
    <>
      <Container color={project.projectColor}>
        <Header>
          {projectEditing ? (
            <TitleEditor ref={domNode}>
              <input
                type="text"
                onBlur={handleTitleEdit}
                onChange={(e) => setNewTitle(e.target.value)}
                value={newTitle}
              />
              <ConfirmContainer>
                <TrashIcon fill="#FFFFFF" onClick={confirmTrigger} />
              </ConfirmContainer>
            </TitleEditor>
          ) : (
            <Title onClick={() => setProjectEditing((prev) => !prev)}>
              {project.title}
            </Title>
          )}
          {tasksFromProject.length >= 1 && (
            dropdownOpen
              ? <CloseIcon fill="#FFFFFF" onClick={() => setDropdownOpen((prevState) => !prevState)} />
              : <ArrowDownIcon fill="#FFFFFF" onClick={() => setDropdownOpen((prevState) => !prevState)} />
          )}
        </Header>
        <Description>
          {project.description}
        </Description>
      </Container>
      {dropdownOpen && (
        <TasksListBackground color={project.projectColor}>
          <ListContainer>
            {tasksFromProject.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onComplete={() => editTask(task.id, { ...task, isCompleted: !task.isCompleted })}
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
  projectEdit: PropTypes.func.isRequired,
};
