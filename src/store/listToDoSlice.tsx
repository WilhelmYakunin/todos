import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

export enum TodoStatus { active = 'active', completed = 'completed' }  

export interface ITodo {
  todo_id: typeof nanoid
  title: string
  description: string
  createdAt: string
  status: typeof TodoStatus
}

export type TToDos = ITodo[]

export type ToDosState = {
    todos: TToDos,
    allToDosCount: number,
    isLoad: boolean,
    error: null,
}

export const initialState: ToDosState = {
    todos: [],
    allToDosCount: 0,
    isLoad: false,
    error: null,
  }

export const todosSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos.push(payload)
      state.allToDosCount += 1
    },
    removeTodo: (state, { payload }) => {
        state.todos = state.todos.filter((todo) => todo.todo_id !== payload);
        state.allToDosCount -= 1;
    },
    setLoadStatus: (state, { payload }) => {
      state.isLoad = payload
    },
    setError: (state, { payload }) => {
      state.error = payload
    },
  },
})

export const { addTodo, removeTodo, setLoadStatus, setError } = todosSlice.actions

export default todosSlice.reducer