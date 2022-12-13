import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  test('renders Administración at sidebar', () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>,
    );
    const element = screen.getByText('Administración'); // buscamos lo que rederizamos

    expect(element).toBeInTheDocument();
  });
});
