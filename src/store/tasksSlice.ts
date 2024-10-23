import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import isString from 'lodash.isstring';
import { TaskInputLng } from '../constants';

export interface ITask {
  task_id: ReturnType<typeof nanoid>;
  description: string;
  isCompleted: boolean;
}

export type TasksState = {
  allTasks: ITask[];
  taskInInput: string;
  incomletedTasksCount: number;
  isLoad: boolean;
  error: null | string;
};

export const todosInitialState: TasksState = {
  allTasks: [],
  taskInInput: '',
  incomletedTasksCount: 0,
  isLoad: false,
  error: null,
};

export const todosSlice = createSlice({
  name: 'tasks',
  initialState: todosInitialState,
  reducers: {
    handleTaskInput: (state, { payload }) => {
      if (!isString(payload)) {
        state.error = TaskInputLng.NOT_STRING_ERROR;
        return;
      }
      if (payload.length > 50) {
        state.error = TaskInputLng.TOO_BIG_INPUT;
        return;
      }
      state.error = null;
      state.taskInInput = payload;
    },
    addTask: (state) => {
      const newTask = {
        task_id: nanoid(),
        description: state.taskInInput,
        isCompleted: false,
      };
      state.allTasks.push(newTask);
      state.taskInInput = '';
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
  handleTaskInput,
  markTaskCompleted,
  removeCompletedTasks,
  setLoadStatus,
  setError,
} = todosSlice.actions;

export default todosSlice.reducer;
