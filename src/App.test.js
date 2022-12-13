import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  test('renders UsersPage', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    const element = screen.getAllByText('Administración');
    expect(element[0]).toBeInTheDocument();
  });
});
