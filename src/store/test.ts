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
      { ...state, ...{ taskInInput: taskDescription } },
      addTask()
    );
    expect(slice.allTasks).toEqual([mockTaskUncompleted]);
    expect(slice.taskInInput).toEqual('');
  });

  it('should handle adding text', () => {
    const taskDescription = 'Run the test';
    const additional = 'additional';
    const slice = reducer(
      { ...state, ...{ taskInInput: taskDescription } },
      handleTaskInput(additional)
    );
    expect(slice.taskInInput).toEqual(taskDescription + additional);
  });

  it('should handle clear task filed', () => {
    const taskDescription = 'Run the test';
    const slice = reducer(
      { ...state, ...{ taskInInput: taskDescription } },
      handleInputClear()
    );
    expect(slice.taskInInput).toEqual(todosInitialState.taskInInput);
  });

  it('should handle task update to completed', () => {
    const slice = reducer(
      { ...todosInitialState, ...{ allTasks: [mockTaskUncompleted] } },
      markTaskCompleted(mockId)
    );
    expect(slice.allTasks).toEqual([mockTaskDone]);
  });

  it('should handle completed tasks removal', () => {
    const slice = reducer(
      {
        ...todosInitialState,
        ...{ allTasks: [mockTaskUncompleted, mockTaskDone] },
      },
      removeCompletedTasks()
    );
    expect(slice.allTasks).toEqual([mockTaskUncompleted]);
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
    const errorIsNumber = 1;
    const sliceCaseNotNumber = reducer(state, handleTaskInput(errorIsNumber));
    expect(sliceCaseNotNumber.error).toEqual(TaskInputLng.NOT_STRING_ERROR);
  });

  it('should handle input too big error', () => {
    const errorTooBigInput = 'x'.repeat(51);
    const sliceCaseTooBig = reducer(state, handleTaskInput(errorTooBigInput));
    expect(sliceCaseTooBig.error).toEqual(TaskInputLng.TOO_BIG_INPUT);
  });
});
