import { Provider } from 'react-redux'
import { store } from './store/store'
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import Grid from '@mui/joy/Grid';
import TasksDesk from './components/TasksDesk/TasksDesk';

const App = () => {

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          <TasksDesk />            
        </Grid>
      </Provider>
    </ErrorBoundary>
  )
}

export default App
