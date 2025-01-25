import { ChangeEventHandler, MouseEventHandler } from 'react'
import Input from '@mui/joy/Input'
import FormLabel from '@mui/joy/FormLabel'
import FormHelperText from '@mui/joy/FormHelperText'
import InfoOutlined from '@mui/icons-material/InfoOutlined'
import { TaskInputLng } from '../../constants'
import ClearButton from '../buttons/ClearButton'
import isString from 'lodash.isstring'

const { LABEL, PLACEHOLDER, ON_ERROR } = TaskInputLng

 const TaskInput = ({ onChange, taskInInput, errorText, onClear } : 
    { onChange: ChangeEventHandler<HTMLInputElement>, taskInInput: string, errorText: null | string, onClear: MouseEventHandler<HTMLButtonElement> }) => {

  return (
    <>
      <FormLabel>{LABEL}</FormLabel>
      <Input 
        onChange={onChange} 
        value={taskInInput} 
        placeholder={PLACEHOLDER} 
        error={isString(errorText)} 
        endDecorator={<ClearButton onClear={onClear} />}        
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

