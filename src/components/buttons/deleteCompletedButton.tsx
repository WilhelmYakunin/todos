import Button from '@mui/material/Button';
import { Delete } from '@mui/icons-material';
import { TaskInputControlls } from '../../constants';

const DeleteTaskButton = ({ onDelete } : { onDelete: React.MouseEventHandler<HTMLButtonElement> }) => 
    <Button onClick={onDelete}>
        {TaskInputControlls.DELETE_TASKS}
        <Delete />
    </Button>

export default DeleteTaskButton