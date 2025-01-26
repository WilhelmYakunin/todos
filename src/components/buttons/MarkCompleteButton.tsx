import Button from '@mui/material/Button'
import { TaskInputControlls } from '../../constants'

const MarkCompleterButton = ({ onMarkComplete, disabled } : { onMarkComplete: React.MouseEventHandler<HTMLButtonElement>, disabled: boolean }) => 
    <Button disabled={disabled} onClick={onMarkComplete}>{TaskInputControlls.MARK_DONE}</Button>

export default MarkCompleterButton