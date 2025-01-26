import Button from '@mui/material/Button';
import { Delete } from '@mui/icons-material';
import { TaskInputControlls } from '../../constants';

const DeleteTaskButton = ({ onDelete } : { onDelete: React.MouseEventHandler<HTMLButtonElement> }) => 
    <Button onClick={onDelete} endIcon={<Delete />}>
        {TaskInputControlls.DELETE_TASKS} 
    </Button>

export default DeleteTaskButton