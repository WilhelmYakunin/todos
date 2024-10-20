import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import Grid from '@mui/joy/Grid';

const App = () => {

  return (
    <ErrorBoundary>
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        
            
        </Grid>
    </ErrorBoundary>
  )
}

export default App
