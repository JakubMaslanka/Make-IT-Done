/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TasksApi } from '../api/TasksApi';

export const getAllTasks = createAsyncThunk(
  'tasks/getAllTasks',
  async ({ userId, accessToken }) => {
    const response = await TasksApi.getAllTasks(userId, accessToken);
    return response;
  },
);

export const createNewTask = createAsyncThunk(
  'tasks/createNewTask',
  async ({ payload, userId, accessToken }) => {
    const response = await TasksApi.addTask(payload, userId, accessToken);
    return response;
  },
);

export const editExistTask = createAsyncThunk(
  'tasks/editExistTask',
  async ({ idx, payload, accessToken }) => {
    const response = await TasksApi.editTask(idx, payload, accessToken);
    return response;
  },
);

export const removeExistTask = createAsyncThunk(
  'tasks/removeExistTask',
  async ({ idx, accessToken }) => {
    const response = await TasksApi.removeTask(idx, accessToken);
    return response;
  },
);

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    isContentLoading: true,
    error: null,
  },
  extraReducers: {
    [getAllTasks.pending]: (state) => {
      state.isContentLoading = true;
      state.error = null;
    },
    [getAllTasks.fulfilled]: (state, { payload }) => {
      state.tasks = payload;
      state.isContentLoading = false;
      state.error = null;
    },
    [getAllTasks.rejected]: (state) => {
      state.error = {
        title: 'Data Fetch Error',
        message: 'It looks like something went wrong with fetching data. We will fix that error as soon as possible. Sorry for the inconvenience. Click "Accept" button to get back to the landing page.',
      };
      state.isContentLoading = false;
      state.tasks = [];
    },
    [createNewTask.fulfilled]: (state, { payload }) => {
      state.tasks = [payload, ...state.tasks];
    },
    [createNewTask.rejected]: (state) => {
      state.error = {
        title: 'Task Creator Error',
        message: 'It looks like something went wrong with Tasks Creator. We will fix that error as soon as possible. Sorry for the inconvenience. Click "Accept" button to get back to the landing page.',
      };
      state.tasks = [];
    },
    [editExistTask.fulfilled]: (state, { payload }) => {
      const idx = state.tasks.findIndex((task) => task.id === payload.id);
      state.tasks[idx] = payload;
    },
    [editExistTask.rejected]: (state) => {
      state.error = {
        title: 'Task Editor Error',
        message: 'It looks like something went wrong with Tasks Editor. We will fix that error as soon as possible. Sorry for the inconvenience. Click "Accept" button to get back to the landing page.',
      };
      state.tasks = [];
    },
    [removeExistTask.fulfilled]: (state, { payload }) => {
      const filteredTasks = state.tasks.filter((task) => task.id !== payload);
      state.tasks = filteredTasks;
    },
  },
});

export const allTasks = ({ tasks }) => tasks;

export default tasksSlice.reducer;
