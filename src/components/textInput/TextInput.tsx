import { ChangeEventHandler } from 'react'
import Input from '@mui/joy/Input'
import FormLabel from '@mui/joy/FormLabel'
import FormHelperText from '@mui/joy/FormHelperText'
import InfoOutlined from '@mui/icons-material/InfoOutlined'
import { TaskInputLng } from '../../constants'

const { LABEL, PLACEHOLDER, ON_ERROR } = TaskInputLng

 const TaskInput = ({ onChange, taskInInput, isError, errorText } : 
    { onChange: ChangeEventHandler<HTMLInputElement>, taskInInput: string, isError: boolean, errorText: null | string }) => {
  return (
    <>
        <FormLabel>{LABEL}</FormLabel>
        <Input onChange={onChange} value={taskInInput} placeholder={PLACEHOLDER} error={isError} defaultValue={ON_ERROR} />
        <FormHelperText>
          <InfoOutlined />
          {errorText && errorText}
        </FormHelperText>
    </>
  );
}

export default TaskInput