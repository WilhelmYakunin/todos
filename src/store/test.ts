import reducer, {
  addTask,
  markTaskCompleted,
  todosInitialState,
  removeCompletedTasks,
  setLoadStatus,
  setError,
} from './tasksSlice';

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

  it('should handle a task being added to an empty list', () => {
    const taskDescription = 'Run the test';
    const slice = reducer(state, addTask(taskDescription));
    expect(slice.allTasks).toEqual([mockTaskUncompleted]);
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
});
