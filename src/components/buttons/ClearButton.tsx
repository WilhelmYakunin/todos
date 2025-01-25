import Button from '@mui/material/Button'
import { TaskInputControlls } from '../../constants'

const ClearButton = ({ onClear } : { onClear: React.MouseEventHandler<HTMLButtonElement> }) => 
    <Button onClick={onClear}>{TaskInputControlls.CLEAR}</Button>

export default ClearButton