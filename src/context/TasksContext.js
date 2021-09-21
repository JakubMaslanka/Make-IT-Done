import React, { createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ErrorBoundarie } from '../utils/ErrorBoundarie';
import {
  allTasks,
  getAllTasks,
  getSpecificTasks,
  createNewTask,
  editExistTask,
  removeExistTask,
} from '../redux/tasksSlice';
import {
  allProjects,
  getAllProjects,
  createNewProject,
  editExistProject,
  removeExistProject,
} from '../redux/projectsSlice';

import { useAuth } from '../hooks/useAuth';

export const TasksContext = createContext();

export default function TasksProvider({ children }) {
  const dispatch = useDispatch();
  const { user, onLogout } = useAuth();
  const { tasks, isContentLoading, error } = useSelector(allTasks);
  const { projects, isProjectsLoading } = useSelector(allProjects);

  const handleTaskReload = () => {
    dispatch(getAllTasks({
      userId: user.user.id,
      accessToken: user.accessToken,
    }));
  };

  const handleTaskCreate = (taskToCreate) => {
    dispatch(createNewTask({
      payload: taskToCreate,
      userId: user.user.id,
      accessToken: user.accessToken,
    }));
  };

  const handleTaskSearch = (searchValue) => {
    dispatch(getSpecificTasks({
      inputValue: searchValue,
      userId: user.user.id,
      accessToken: user.accessToken,
    }));
  };

  const handleTaskEdit = (taskIdx, editedTask) => {
    dispatch(editExistTask({
      idx: taskIdx,
      payload: editedTask,
      accessToken: user.accessToken,
    }));
  };

  const handleRemoveEdit = (idToRemove) => {
    dispatch(removeExistTask({ idx: idToRemove, accessToken: user.accessToken }));
  };

  const handleProjectCreate = (projectToCreate) => {
    dispatch(createNewProject({
      payload: projectToCreate,
      userId: user.user.id,
      accessToken: user.accessToken,
    }));
  };

  const handleProjectEdit = (projectIdx, editedProject) => {
    dispatch(editExistProject({
      idx: projectIdx,
      payload: editedProject,
      accessToken: user.accessToken,
    }));
  };

  const handleProjectRemove = (projectId) => {
    dispatch(removeExistProject({ idx: projectId, accessToken: user.accessToken }));
  };

  useEffect(() => {
    if (user) {
      dispatch(getAllTasks({
        userId: user.user.id,
        accessToken: user.accessToken,
      }));
      dispatch(getAllProjects({
        userId: user.user.id,
        accessToken: user.accessToken,
      }));
    }
  }, [user, dispatch]);

  return (
    <TasksContext.Provider value={{
      isContentLoading,
      isProjectsLoading,
      tasks,
      projects,
      handleTaskReload,
      handleTaskSearch,
      handleTaskCreate,
      handleTaskEdit,
      handleRemoveEdit,
      handleProjectCreate,
      handleProjectEdit,
      handleProjectRemove,
    }}
    >
      <ErrorBoundarie error={error} onLogout={onLogout}>
        {children}
      </ErrorBoundarie>
    </TasksContext.Provider>
  );
}

TasksProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
