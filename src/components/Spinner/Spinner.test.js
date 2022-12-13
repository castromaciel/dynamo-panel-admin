import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Spinner from './Spinner';

jest.mock('lottie-react');

describe('Spinner', () => {
  test('renders Spinner', () => {
    render(
      <BrowserRouter>
        <Spinner />
      </BrowserRouter>,
    );
    const element = screen.getByTestId('spinner-id');
    expect(element).toBeInTheDocument();
  });
});
