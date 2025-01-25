import { render, screen } from '@testing-library/react';
import ClearButton from './ClearButton';
import AddTaskButton from './addTaskButton';
import { TaskInputControlls } from '../../constants'

const { ADD_TASK, CLEAR } = TaskInputControlls;

test('render clear button', async () => {
  render(<ClearButton onClear={() => {}} />);

  expect(screen.getByText(CLEAR)).toBeTruthy();
});

test('render add task button', async () => {
  render(<AddTaskButton onAddTask={() => {}} />);

  expect(screen.getByText(ADD_TASK)).toBeTruthy();
});