import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import Grid from '@mui/joy/Grid';
import TasksDesk from './components/TasksDesk/TasksDesk';

const App = () => {

  return (
    <ErrorBoundary>
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          <TasksDesk />            
        </Grid>
    </ErrorBoundary>
  )
}

export default App
