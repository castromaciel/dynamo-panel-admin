import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Spinner from './Spinner';

jest.mock('lottie-react');

describe('Sidebar', () => {
  test('renders Administración at sidebar', () => {
    render(
      <BrowserRouter>
        <Spinner />
      </BrowserRouter>,
    );
    const element = screen.getByTestId('spinner-id');
    expect(element).toBeInTheDocument();
  });
});
