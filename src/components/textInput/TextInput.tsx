import { ChangeEventHandler, KeyboardEventHandler, ReactNode } from 'react';
import Input from '@mui/joy/Input';
import FormHelperText from '@mui/joy/FormHelperText';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import { TaskInputLng } from '../../constants';
import isString from 'lodash.isstring';

const { PLACEHOLDER, ON_ERROR } = TaskInputLng

 const TaskInput = ({ onEnter, onChange, taskInInput, errorText, autoFocus, endDecorator } : 
    { onChange: ChangeEventHandler<HTMLInputElement>, 
      taskInInput: string, 
      errorText: null | string,
      onEnter: KeyboardEventHandler<HTMLInputElement>,
      autoFocus?: boolean
      endDecorator?: ReactNode }) => {

  return (
    <>
      <Input 
        autoFocus={autoFocus}
        type='text'
        onKeyDown={onEnter}
        onChange={onChange} 
        value={taskInInput} 
        placeholder={PLACEHOLDER} 
        error={isString(errorText)} 
        endDecorator={<>{endDecorator}</>}        
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

