import { ChangeEventHandler, KeyboardEventHandler, MouseEventHandler } from 'react';
import Input from '@mui/joy/Input';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import { TaskInputLng } from '../../constants';
import ClearButton from '../buttons/ClearButton';
import AddTaskButton from '../buttons/addTaskButton';
import isString from 'lodash.isstring';

const { LABEL, PLACEHOLDER, ON_ERROR } = TaskInputLng

 const TaskInput = ({ onEnter, onChange, taskInInput, errorText, onClear, onAddtask } : 
    { onChange: ChangeEventHandler<HTMLInputElement>, 
      taskInInput: string, 
      errorText: null | string,
      onEnter: KeyboardEventHandler<HTMLInputElement>,
      onClear: MouseEventHandler<HTMLButtonElement>, 
      onAddtask: MouseEventHandler<HTMLButtonElement> }) => {

  return (
    <>
      <Input 
        type='text'
        onKeyDown={onEnter}
        onChange={onChange} 
        value={taskInInput} 
        placeholder={PLACEHOLDER} 
        error={isString(errorText)} 
        endDecorator={<>
                        <ClearButton onClear={onClear} />
                        <AddTaskButton onAddTask={onAddtask} />
                      </>}        
      />
      <FormHelperText>
        {errorText && <>
                        <InfoOutlined />
                        <span>{ON_ERROR}</span>
                        {errorText}
                      </> }
      </FormHelperText>
    </>
  );
}

export default TaskInput

