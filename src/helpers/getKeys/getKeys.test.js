import getKeys from './getKeys';

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

const titles = [
  'avatar',
  'email',
  'fullname',
  'id',
  'isactive',
  'phonenumber',
  'role',
];

describe('getKeys', () => {
  test('test getKeys with data', () => {
    expect(getKeys(data)).toStrictEqual(titles);
  });
  test('test getKeys without data', () => {
    expect(getKeys([])).toStrictEqual(undefined);
  });
});
