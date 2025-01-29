import Button from '@mui/material/Button'
import { TaskInputControlls } from '../../constants'

const AddTaskButton = ({ className, onAddTask } : { className?: string, onAddTask: React.MouseEventHandler<HTMLButtonElement> }) => 
    <Button className={className} type='submit' onClick={onAddTask}>{TaskInputControlls.ADD_TASK}</Button>

export default AddTaskButton