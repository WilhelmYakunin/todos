import { render, screen } from '@testing-library/react';
import TextInput from './TestInput';
import reducer, {
    addTask,
    handleInputClear,
    markTaskCompleted,
    todosInitialState,
    removeCompletedTasks,
    setLoadStatus,
    setError,
    handleTaskInput,
  } from '../../store/tasksSlice';
  
import { TaskInputLng } from '../../constants';
  
  const mockId = '1234';
  jest.mock('nanoid', () => {
    return { nanoid: () => mockId };
  });

const { LABEL, PLACEHOLDER } = TaskInputLng;

test('render text input', () => {
    const state = reducer(undefined, { type: 'unknown' });
    
    const { container } = render(<TextInput 
        taskInInput={state.taskInInput} 
        onClear={(e) => {
            e.preventDefault()
            handleInputClear()
        }} 
        errorText={state.error} 
        onChange={handleTaskInput} />);

    expect(screen.getByText(LABEL)).toBeTruthy();
    expect(screen.getAllByPlaceholderText(PLACEHOLDER)).toBeTruthy();
    expect(container.querySelector('input')?.value).toBe(todosInitialState.taskInInput);
});