import { render, screen } from '@testing-library/react';
import TextInput from './TextInput';
import reducer, { addTask, todosInitialState, handleTaskInput } from '../../store/tasksSlice';
  
import { TaskInputLng } from '../../constants';
  
  const mockId = '1234';
  jest.mock('nanoid', () => {
    return { nanoid: () => mockId };
  });

const { PLACEHOLDER } = TaskInputLng;

test('render text input', () => {
    const state = reducer(undefined, { type: 'unknown' });
    
    const { container } = render(<TextInput 
        taskInInput={state.taskInput} 
        onEnter={(e) => {
          e.preventDefault()
          addTask()
      }}
        errorText={state.error} 
        onChange={handleTaskInput} 
      />);

    expect(screen.getAllByPlaceholderText(PLACEHOLDER)).toBeTruthy();
    expect(container.querySelector('input')?.value).toBe(todosInitialState.taskInput);
});