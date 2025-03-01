import reducer, {
  addTask,
  handleInputClear,
  markTaskCompleted,
  todosInitialState,
  removeCompletedTasks,
  setLoadStatus,
  setError,
  handleTaskInput,
} from './tasksSlice';

import { TaskInputLng } from '../constants';

const mockId = '1234';
jest.mock('nanoid', () => {
  return { nanoid: () => mockId };
});

const mockTaskUncompleted = {
  description: 'Run the test',
  isCompleted: false,
  task_id: mockId,
};

const mockTaskDone = {
  description: 'Run the test',
  isCompleted: true,
  task_id: mockId,
};

describe('unit test of allTasks slice', () => {
  const state = reducer(undefined, { type: 'unknown' });

  it('should return passed initial state', () => {
    expect(state).toEqual(todosInitialState);
  });

  it('should handle a task being added to task list', () => {
    const taskDescription = 'Run the test';
    const slice = reducer(
      { ...state, ...{ taskInput: taskDescription } },
      addTask()
    );
    expect(slice.tasks).toEqual([mockTaskUncompleted]);
    expect(slice.taskInput).toEqual('');
  });

  it('should handle input text', () => {
    const taskDescription = 'Run the test';
    const slice = reducer(state, handleTaskInput(taskDescription));
    expect(slice.taskInput).toEqual(taskDescription);
  });

  it('should handle clear task filed', () => {
    const taskDescription = 'Run the test';
    const slice = reducer(
      { ...state, ...{ taskInInput: taskDescription } },
      handleInputClear()
    );
    expect(slice.taskInput).toEqual(todosInitialState.taskInput);
  });

  it('should handle task update to completed', () => {
    const slice = reducer(
      { ...todosInitialState, ...{ tasks: [mockTaskUncompleted] } },
      markTaskCompleted(mockId)
    );
    expect(slice.tasks).toEqual([mockTaskDone]);
  });

  it('should handle completed tasks removal', () => {
    const slice = reducer(
      {
        ...todosInitialState,
        ...{ tasks: [mockTaskUncompleted, mockTaskDone] },
      },
      removeCompletedTasks()
    );
    expect(slice.tasks).toEqual([mockTaskUncompleted]);
  });

  it('should handle load status', () => {
    const slice = reducer(state, setLoadStatus(true));
    expect(slice.isLoad).toBeTruthy();
  });

  it('should handle error', () => {
    const error = Error('Something went wrong');
    const slice = reducer(state, setError(error));
    expect(slice.error).toEqual(error);
  });

  it('should handle input not string error', () => {
    const errorIsEmty = '';
    const sliceCaseNotNumber = reducer(
      { ...state, ...{ taskInInput: errorIsEmty } },
      addTask()
    );
    expect(sliceCaseNotNumber.error).toEqual(TaskInputLng.NOT_STRING_ERROR);
  });

  it('should handle input too big error', () => {
    const errorTooBigInput = 'x'.repeat(51);
    const sliceCaseTooBig = reducer(state, handleTaskInput(errorTooBigInput));
    expect(sliceCaseTooBig.error).toEqual(TaskInputLng.TOO_BIG_INPUT);
  });
});
