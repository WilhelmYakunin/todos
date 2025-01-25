import Button from '@mui/material/Button'
import { TaskInputControlls } from '../../constants'

const MarkCompleterButton = ({ onMarkComplete } : { onMarkComplete: React.MouseEventHandler<HTMLButtonElement> }) => 
    <Button onClick={onMarkComplete}>{TaskInputControlls.MARK_DONE}</Button>

export default MarkCompleterButton