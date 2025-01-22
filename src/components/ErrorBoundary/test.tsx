import { render, screen } from '@testing-library/react';
import ErrorPage from './ErrorPage';
import { errorBoundary } from '../../constants';

const { header } = errorBoundary;

test('render error page', async () => {
  render(<ErrorPage error={{ message: 'A bag', errorStack: '<dis></div>' }} />);

  expect(screen.getByText(header)).toBeTruthy();
});
