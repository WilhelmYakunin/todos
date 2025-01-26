import Button from '@mui/material/Button'
import { TaskInputControlls } from '../../constants'

const AddTaskButton = ({ onAddTask } : { onAddTask: React.MouseEventHandler<HTMLButtonElement> }) => 
    <Button type='submit' onClick={onAddTask}>{TaskInputControlls.ADD_TASK}</Button>

export default AddTaskButton