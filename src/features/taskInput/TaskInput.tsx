import { useCallback, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import TextInput from '../../components/textInput/TextInput';

import { handleInputClear, handleTaskInput, addTask } from '../../store/tasksSlice';
import { useAppDispatch, useTypedSelector } from '../../store/store';
import { getAllTasksError, getTaskInInput } from '../../store/selectors';
import { FormControl } from '@mui/material';

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
    <Box>
        <FormControl onSubmit={onAddTask} sx={{ margin: '10px auto', display: 'flex', flexDirection: 'column', width: '30%', gap: '10px' }}>
            <TextInput 
                autoFocus={true}
                taskInInput={inputValue} 
                onChange={(e) => onInput(e)} 
                errorText={inputError} 
                onClear={clearInput}
                onEnter={onEnterTask}
                onAddtask={onAddTask} />          
        </FormControl>
        
    </Box>
  );
}

export default TaskInput;