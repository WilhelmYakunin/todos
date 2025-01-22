import { Provider } from 'react-redux'
import { store } from './store/store'

import Grid from '@mui/joy/Grid';


const App = () => {

  return (
 
      <Provider store={store}>
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        
        </Grid>
      </Provider>

  )
}

export default App
