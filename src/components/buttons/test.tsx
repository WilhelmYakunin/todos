import { render, screen } from '@testing-library/react';
import ClearButton from './ClearButton';
import AddTaskButton from './addTaskButton';
import MarkCompleterButton from './MarkCompleteButton';
import DeleteCompletedButton from './deleteCompletedButton';
import { TaskInputControlls } from '../../constants';

const { ADD_TASK, DELETE_TASKS, MARK_DONE, CLEAR } = TaskInputControlls;

test('render clear button', async () => {
  render(<ClearButton onClear={() => {}} />);

  expect(screen.getByText(CLEAR)).toBeTruthy();
});

test('render add task button', async () => {
  render(<AddTaskButton onAddTask={() => {}} />);

  expect(screen.getByText(ADD_TASK)).toBeTruthy();
});

test('render mark done button', async () => {
  render(<MarkCompleterButton disabled={false} onMarkComplete={() => {}} />);

  expect(screen.getByText(MARK_DONE)).toBeTruthy();
});

test('render delete completed tasks button', async () => {
  render(<DeleteCompletedButton onDelete={() => {}} />);

  expect(screen.getByText(DELETE_TASKS)).toBeTruthy();
});