import { makeRequest } from './makeRequest';
import { BASE_URL } from './BaseUrl';

export const TasksApi = {
  async getAllTasks(userId, accessToken) {
    const response = await makeRequest(`${BASE_URL}/users/${userId}/tasks`, 'GET', null, accessToken);
    const result = await response.json();
    return result;
  },
  async getTasksByTextSearch(inputValue, userId, accessToken) {
    const response = await makeRequest(`${BASE_URL}/users/${userId}/tasks?q=${encodeURIComponent(inputValue)}`, 'GET', null, accessToken);
    const result = await response.json();
    return result;
  },
  async addTask(taskToAdd, userId, accessToken) {
    const taskWithUserId = {
      ...taskToAdd,
      userId,
    };
    const response = await makeRequest(`${BASE_URL}/tasks`, 'POST', taskWithUserId, accessToken);
    const addedTask = await response.json();
    return addedTask;
  },
  async editTask(taskIdx, editedTask, accessToken) {
    const response = await makeRequest(`${BASE_URL}/tasks/${taskIdx}`, 'PUT', editedTask, accessToken);
    const edittedTask = await response.json();
    return edittedTask;
  },
  async removeTask(idToRemove, accessToken) {
    let response;
    try {
      response = await makeRequest(`${BASE_URL}/tasks/${idToRemove}`, 'DELETE', null, accessToken);
    } catch (error) {
      response = idToRemove;
    }
    return response;
  },
};
