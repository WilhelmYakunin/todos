import { RootState } from './store';
import { ITask } from './tasksSlice';

export const getAllTasks = (state: RootState): ITask[] => state.tasks.tasks;
export const getTaskInInput = (state: RootState): string =>
  state.tasks.taskInput;
export const getAllTasksIsload = (state: RootState): boolean =>
  state.tasks.isLoad;
export const getAllTasksError = (state: RootState): null | string =>
  state.tasks.error;
