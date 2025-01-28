import { Provider } from 'react-redux';
import { fireEvent, waitFor } from '@testing-library/dom';
import { render, screen } from '@testing-library/react';
import Grid from '@mui/joy/Grid';
import TaskInput from './features/taskInput/TaskInput';
import ButtomNavigation from './features/buttomNavigation/ButtomNavigation';
import { TaskState, TaskInputControlls, TaskInputLng } from './constants';
import { store } from './store/store';

const mockId = '1234';
jest.mock('nanoid', () => {
  return { nanoid: () => mockId };
});

test('app runs the add, mark done and deleted completed task scenarions', async () => {

    render(      
    <Provider store={store}>
        <Grid>
          <TaskInput />
          <ButtomNavigation />
        </Grid>
      </Provider>)

    // expect handle input
    expect(store.getState().tasks.taskInput).toBe('');
    const taskDescription = 'new task';
    await fireEvent.change(screen.getByPlaceholderText(TaskInputLng.PLACEHOLDER), {target: {value: taskDescription}});
    expect(store.getState().tasks.taskInput).toBe(taskDescription);

    // expect handle adding task
    expect(store.getState().tasks.tasks.length).toBe(0);
    await fireEvent.click(screen.getByText(TaskInputControlls.ADD_TASK));
    expect(store.getState().tasks.tasks.length).toBe(1);
    expect(store.getState().tasks.tasks[0].description).toBe(taskDescription);
    expect(store.getState().tasks.tasks[0].isCompleted).toBeFalsy();
    expect(store.getState().tasks.taskInput).toBe('');

    // expect celar input with clear button
    await fireEvent.change(screen.getByPlaceholderText(TaskInputLng.PLACEHOLDER), {target: {value: taskDescription}});
    expect(store.getState().tasks.taskInput).toBe(taskDescription);
    await fireEvent.click(screen.getByText(TaskInputControlls.CLEAR));
    expect(store.getState().tasks.taskInput).toBe('');
    expect(store.getState().tasks.tasks.length).toBe(1);

    // expect uncompleted task to be at the active desk
    expect(screen.getAllByText(taskDescription)).toBeTruthy();
    expect(store.getState().tasks.tasks[0].isCompleted).toBeFalsy();
    await fireEvent.click(screen.getByText(TaskState.ACTIVE));
    expect(screen.getAllByText(taskDescription)).toBeTruthy();
    await fireEvent.click(screen.getByText(TaskState.ALL));
    expect(screen.getAllByText(taskDescription)).toBeTruthy();

    // expect the task not to be in the completed desk
    await fireEvent.click(screen.getByText(TaskState.COMPLETED));
    await waitFor(() => {
      expect(screen.queryByText(taskDescription)).toBeFalsy();
    })

    // expect marking done a task moves it to the completed desk
    await fireEvent.click(screen.getByText(TaskState.ALL));
    const firstTaskButtonDOne = screen.queryAllByText(TaskInputControlls.MARK_DONE)[0]
    await fireEvent.click(firstTaskButtonDOne);
    expect(store.getState().tasks.tasks[0].description).toBe(taskDescription);
    expect(store.getState().tasks.tasks[0].isCompleted).toBeTruthy();
    await fireEvent.click(screen.getByText(TaskState.COMPLETED));
    expect(screen.getAllByText(taskDescription)).toBeTruthy();

    // expect deleted task remove it from state and the desks
    await fireEvent.click(screen.getByText(TaskInputControlls.DELETE_TASKS));
    expect(store.getState().tasks.tasks.length).toBe(0);
    await waitFor(() => {
      expect(screen.queryByText(taskDescription)).toBeFalsy();
    })
})