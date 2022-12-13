import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Table from './Table';

const title = 'Beneficios';
const data = [
  {
    email: 'juancansi@gmail.co',
    fullname: 'Juan Ignacio Cansillieri',
    idbeneficio: [
      '1xWK8guahm9EIg5O7GpM',
      '39ry8Is6b3Nhs9AdPkAA',
      '7mWr5XR4L0xMZgy4H9ml',
    ],
    avatar: 'https://picsum.photos/100/100',
    isactive: true,
    phonenumber: null,
    role: 'user',
    id: 'RjfuSBBLyO0ilDuOcES5',
  },
  {
    idbeneficio: [
      '1xWK8guahm9EIg5O7GpM',
      '39ry8Is6b3Nhs9AdPkAA',
      '7mWr5XR4L0xMZgy4H9ml',
    ],
    email: 'juan@j.com',
    role: 'user',
    phonenumber: null,
    fullname: 'Jdfhjkkk Hhyhfthjk',
    isactive: true,
    avatar: 'https://picsum.photos/100/100',
    id: 'Yjc7IuidmRxDiSC36NbS',
  },
];

describe('Table', () => {
  test('renders Table with users', () => {
    render(
      <BrowserRouter>
        <Table data={data} title={title}/>
      </BrowserRouter>,
    );

    const element = screen.getAllByText(title);
    expect(element[0]).toBeInTheDocument();
  });
});
