import Button from '@mui/material/Button'
import { TaskInputControlls } from '../../constants'

const ClearButton = ({ onAddTask } : { onAddTask: React.MouseEventHandler<HTMLButtonElement> }) => 
    <Button onClick={onAddTask}>{TaskInputControlls.ADD_TASK}</Button>

export default ClearButton