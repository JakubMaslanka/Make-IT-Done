/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProjectsApi } from '../api/ProjectsApi';

export const getAllProjects = createAsyncThunk(
  'projects/getAllProjects',
  async ({ userId, accessToken }) => {
    const response = await ProjectsApi.getAllProjects(userId, accessToken);
    return response;
  },
);

export const createNewProject = createAsyncThunk(
  'projects/createNewProject',
  async ({ payload, userId, accessToken }) => {
    const response = await ProjectsApi.addProject(payload, userId, accessToken);
    return response;
  },
);

export const editExistProject = createAsyncThunk(
  'projects/editExistProject',
  async ({ idx, payload, accessToken }) => {
    const response = await ProjectsApi.editProject(idx, payload, accessToken);
    return response;
  },
);

export const removeExistProject = createAsyncThunk(
  'projects/removeExistProject',
  async ({ idx, accessToken }) => {
    const response = await ProjectsApi.removeProject(idx, accessToken);
    return response;
  },
);

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: [],
    isProjectsLoading: true,
    error: null,
  },
  extraReducers: {
    [getAllProjects.pending]: (state) => {
      state.isProjectsLoading = true;
      state.error = null;
    },
    [getAllProjects.fulfilled]: (state, { payload }) => {
      state.projects = payload;
      state.isProjectsLoading = false;
      state.error = null;
    },
    [getAllProjects.rejected]: (state) => {
      state.error = {
        title: 'Data Fetch Error',
        message: 'It looks like something went wrong with fetching data. We will fix that error as soon as possible. Sorry for the inconvenience. Click "Accept" button to get back to the landing page.',
      };
      state.isProjectsLoading = false;
      state.projects = [];
    },
    [createNewProject.fulfilled]: (state, { payload }) => {
      state.projects = [payload, ...state.projects];
    },
    [createNewProject.rejected]: (state) => {
      state.error = {
        title: 'Project Creator Error',
        message: 'It looks like something went wrong with Project Creator. We will fix that error as soon as possible. Sorry for the inconvenience. Click "Accept" button to get back to the landing page.',
      };
      state.projects = [];
    },
    [editExistProject.fulfilled]: (state, { payload }) => {
      const idx = state.projects.findIndex((project) => project.id === payload.id);
      state.projects[idx] = payload;
    },
    [editExistProject.rejected]: (state) => {
      state.error = {
        title: 'Project Editor Error',
        message: 'It looks like something went wrong with Project Editor. We will fix that error as soon as possible. Sorry for the inconvenience. Click "Accept" button to get back to the landing page.',
      };
      state.projects = [];
    },
    [removeExistProject.fulfilled]: (state, { payload }) => {
      const filteredTasks = state.projects.filter((project) => project.id !== payload);
      state.projects = filteredTasks;
    },
  },
});

export const allProjects = ({ projects }) => projects;

export default projectsSlice.reducer;
