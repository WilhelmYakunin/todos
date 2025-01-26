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
  tasks: ITask[];
  taskInInput: string;
  incomletedTasksCount: number;
  isLoad: boolean;
  error: null | string;
};

export const todosInitialState: TasksState = {
  tasks: [],
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
      if (payload.length > 50) {
        state.error = TaskInputLng.TOO_BIG_INPUT;
        return;
      }
      state.error = null;
      state.taskInInput = payload;
    },
    handleInputClear: (state) => {
      state.taskInInput = todosInitialState.taskInInput;
    },
    addTask: (state) => {
      if (!isString(state.taskInInput) || state.taskInInput.length === 0) {
        state.error = TaskInputLng.NOT_STRING_ERROR;
        return;
      }
      const newTask = {
        task_id: nanoid(),
        description: state.taskInInput,
        isCompleted: false,
      };
      state.tasks.push(newTask);
      state.taskInInput = todosInitialState.taskInInput;
      state.incomletedTasksCount += 1;
    },
    markTaskCompleted: (state, { payload }) => {
      state.tasks.map((task) => {
        if (task.task_id === payload) {
          task.isCompleted = true;
          state.incomletedTasksCount -= 1;
        }
      });
    },
    removeCompletedTasks: (state) => {
      state.tasks = state.tasks.filter((task) => task.isCompleted === false);
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
  handleInputClear,
  markTaskCompleted,
  removeCompletedTasks,
  setLoadStatus,
  setError,
} = todosSlice.actions;

export default todosSlice.reducer;
