import { Provider } from 'react-redux'
import { store } from './store/store'
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import Grid from '@mui/joy/Grid';
import ButtomNavigation from './features/buttomNavigation/ButtomNavigation';
import TaskInput from './features/taskInput/TaskInput';

const App = () => {

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Grid>
          <TaskInput />
          <ButtomNavigation />
        </Grid>
      </Provider>
    </ErrorBoundary>
  )
}

export default App
