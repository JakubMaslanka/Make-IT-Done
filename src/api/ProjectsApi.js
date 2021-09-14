import { makeRequest } from './makeRequest';
import { BASE_URL } from './BaseUrl';

export const ProjectsApi = {
  async getAllProjects(userId, accessToken) {
    const response = await makeRequest(`${BASE_URL}/users/${userId}/projects`, 'GET', null, accessToken);
    const result = await response.json();
    return result;
  },
  async addProject(taskToAdd, userId, accessToken) {
    const taskWithUserId = {
      ...taskToAdd,
      userId,
    };
    const response = await makeRequest(`${BASE_URL}/projects`, 'POST', taskWithUserId, accessToken);
    const addedTask = await response.json();
    return addedTask;
  },
  async editProject(taskIdx, editedTask, accessToken) {
    const response = await makeRequest(`${BASE_URL}/projects/${taskIdx}`, 'PUT', editedTask, accessToken);
    const edittedTask = await response.json();
    return edittedTask;
  },
  async removeProject(idToRemove, accessToken) {
    let response;
    try {
      response = await makeRequest(`${BASE_URL}/projects/${idToRemove}`, 'DELETE', null, accessToken);
    } catch (error) {
      response = idToRemove;
    }
    return response;
  },
};
