import Button from '@mui/material/Button'
import { TaskInputControlls } from '../../constants'
import { AddTask } from '@mui/icons-material'

const ClearButton = ({ onAddTask } : { onAddTask: React.MouseEventHandler<HTMLButtonElement> }) => 
    <Button onClick={onAddTask}>{TaskInputControlls.ADD_TASK}
       <AddTask />
    </Button>

export default ClearButton