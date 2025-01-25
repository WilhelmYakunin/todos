import { Provider } from 'react-redux'
import { store } from './store/store'
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import Grid from '@mui/joy/Grid';
import ButtomNavigation from './features/buttomNavigation/ButtomNavigation';

const App = () => {

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Grid container>
          <ButtomNavigation />
        </Grid>
      </Provider>
    </ErrorBoundary>
  )
}

export default App
