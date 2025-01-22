import { Box, Button, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';

import { errorBoundary } from '../../constants';
import { IError } from './model';

const primary = purple[500]; // #f44336
const { headerRole, header } = errorBoundary

const ErrorPage = ({ error }: { error?: IError }) => (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }} role={headerRole}>
        {header}
      </Typography>
      <Box>
        {error && error.errorStack}
        <Button variant="contained">Report this bag</Button>
      </Box>
      <Button variant="contained">Back Home</Button>
    </Box>
  );

  export default ErrorPage