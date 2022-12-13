import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Table from './Table';

const userTitle = 'Usuarios';
const benefitsTitle = 'Beneficios';
const users = [
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
const benefits = [
  {
    isactive: false,
    title: 'Rolling Fest - 2022',
    descripcion: '2 DE DICIEMBRE a las 21hs Camino del Sirga y Federico Rossi - Yerba Buena. LA PULSERA TIENE UN COSTO DE $1950  la misma incluye acceso al evento, comida, bebida y mas sorpresas. (pueden pasar a retirarla desde el site de 8 a 21hs, LLEVAR DNI) ',
    onlystaff: true,
    url: 'https://i.ibb.co/YcQm4vj/slack-1-720.png',
    buttonlabel: 'Inscribirse',
    id: '1xWK8guahm9EIg5O7GpM',
  },
  {
    isactive: true,
    onlystaff: false,
    url: 'https://i.ibb.co/7SjC9QD/Tucuman-en-Tecnologia.jpg',
    descripcion: 'Este ha sido un año de grandes logros que merecen festejarse. Por eso, junto a la municipalidad de San Miguel de Tucumán hemos organizado "Tecnología en Tucumán", un gran evento‼️para vernos, conocernos, reencontrarnos, inspirarnos, charlar sobre el Tucumán tecnológico que estamos construyendo entre todos, escuchar música y, sobre todo, pasarla genial.',
    title: 'Tucumán en tecnología',
    buttonlabel: 'Inscribirse',
    id: '39ry8Is6b3Nhs9AdPkAA',
  },
  {
    title: 'Workshop QA',
    buttonlabel: 'Inscribirse',
    descripcion: 'Si buscabas especializarte para estar a la altura de uno de los puestos más demandados de la industria del software 🧑🏻‍💻, no te pierdas el próximo WORKSHOP DE QA Tester‼️, exclusivo para egresados de nuestra school y todos los miembros de la comunidad de RollingCode.',
    isactive: true,
    onlystaff: false,
    url: 'https://i.ibb.co/wyXDkpv/Wokshop-QA.jpg',
    id: '7mWr5XR4L0xMZgy4H9ml',
  },
];
describe('Table', () => {
  test('renders Table with users', () => {
    render(
      <BrowserRouter>
        <Table data={users} title={userTitle}/>
      </BrowserRouter>,
    );

    const element = screen.getAllByText(userTitle);
    expect(element[0]).toBeInTheDocument();
  });

  test('renders Table with benefits', () => {
    render(
      <BrowserRouter>
        <Table data={benefits} title={benefitsTitle}/>
      </BrowserRouter>,
    );

    const element = screen.getAllByText(benefitsTitle);
    expect(element[0]).toBeInTheDocument();
  });
});
