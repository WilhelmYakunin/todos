import { RootState } from './store';
import { ITask } from './tasksSlice';

export const getAllTasks = (state: RootState): ITask[] => state.tasks.allTasks;
export const getAllTasksIsload = (state: RootState): ITask[] =>
  state.tasks.isLoad;
export const getAllTasksError = (state: RootState): ITask[] =>
  state.tasks.error;
