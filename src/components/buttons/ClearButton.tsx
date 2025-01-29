import Button from '@mui/material/Button'
import { TaskInputControlls } from '../../constants'

const ClearButton = ({ className, onClear } : { className?: string, onClear: React.MouseEventHandler<HTMLButtonElement> }) => 
    <Button className={className} onClick={onClear}>{TaskInputControlls.CLEAR}</Button>

export default ClearButton