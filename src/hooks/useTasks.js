import { useContext } from 'react';
import { TasksContext } from '../context/TasksContext';

export function useTasks() {
  return useContext(TasksContext);
}
