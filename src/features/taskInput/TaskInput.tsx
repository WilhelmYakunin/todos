import { useCallback, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import TextInput from '../../components/textInput/TextInput';
import AddTaskButton from '../../components/buttons/addTaskButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ClearButton from '../../components/buttons/ClearButton';
import { handleInputClear, handleTaskInput, addTask } from '../../store/tasksSlice';
import { useAppDispatch, useTypedSelector } from '../../store/store';
import { getAllTasksError, getTaskInInput } from '../../store/selectors';
import { Button, FormControl } from '@mui/material';

import { cn } from '@bem-react/classname';
import './styles.css';

const bem = cn('taskInput');

const TaskInput = () => {
  const inputValue = useTypedSelector(getTaskInInput);
  const inputError = useTypedSelector(getAllTasksError);
  const dispatch = useAppDispatch();
  const onInput = useCallback((e: ChangeEvent<HTMLInputElement>) => dispatch(handleTaskInput(e.target.value)), [dispatch]);
  const clearInput = useCallback(() => dispatch(handleInputClear()), [dispatch]);
  const onAddTask = useCallback(() => dispatch(addTask()), [dispatch]);
  const onEnterTask = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      dispatch(addTask());
    }
  }, [dispatch]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', m: '10px 0px' }}>
        <FormControl 
          className={bem('inputWrapper')}
          onSubmit={onAddTask}>
            <TextInput 
                autoFocus={true}
                taskInInput={inputValue} 
                onChange={(e) => onInput(e)} 
                errorText={inputError} 
                onEnter={onEnterTask}
                endDecorator={<>
                  <ClearButton className={bem('clearButton')} onClear={clearInput} />
                  <AddTaskButton className={bem('addTaskButton')} onAddTask={onAddTask} />
                  <Button className={bem('addTaskButtonMobile')} onClick={onAddTask}><AddCircleIcon /></Button>
                </>} />          
        </FormControl>
    </Box>
  );
}

export default TaskInput;