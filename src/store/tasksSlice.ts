import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export interface ITask {
  task_id: ReturnType<typeof nanoid>;
  description: string;
  isCompleted: boolean;
}

export type ToDosState = {
  allTasks: ITask[];
  incomletedTasksCount: number;
  isLoad: boolean;
  error: null;
};

export const todosInitialState: ToDosState = {
  allTasks: [],
  incomletedTasksCount: 0,
  isLoad: false,
  error: null,
};

export const todosSlice = createSlice({
  name: 'tasks',
  initialState: todosInitialState,
  reducers: {
    addTask: (state, { payload }) => {
      const newTask = {
        task_id: nanoid(),
        description: payload,
        isCompleted: false,
      };
      state.allTasks.push(newTask);
      state.incomletedTasksCount += 1;
    },
    markTaskCompleted: (state, { payload }) => {
      state.allTasks.map((task) => {
        if (task.task_id === payload) {
          task.isCompleted = true;
          state.incomletedTasksCount -= 1;
        }
      });
    },
    removeCompletedTasks: (state) => {
      state.allTasks = state.allTasks.filter(
        (task) => task.isCompleted === false
      );
    },
    setLoadStatus: (state, { payload }) => {
      state.isLoad = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const {
  addTask,
  markTaskCompleted,
  removeCompletedTasks,
  setLoadStatus,
  setError,
} = todosSlice.actions;

export default todosSlice.reducer;
