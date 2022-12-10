import {
  addDoc, getFirestore, getDocs, collection,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Sidebar, Table } from './components';
import app from './db/firebase';

const db = getFirestore(app);

const App = () => {
  const [users, setUsers] = useState([]);
  const [benefits, setBenefits] = useState([]);

  const getUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'usuarios'));
      querySnapshot.forEach((doc) => {
        setUsers((prev) => [...prev, doc.data()]);
      });
    } catch (error) {
      console.error(error);
    }
  };
  const getBenefits = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'beneficios'));
      querySnapshot.forEach((doc) => {
        console.log(doc);
        setBenefits((prev) => [...prev, doc.data()]);
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Agrega beneficio a la DataBase
  const addBeneficio = async () => {
    const infoBeneficio = {
      buttonlabel: 'Cancelar',
      descripcion: 'Descripcion de Beneficio n',
      isactive: true,
      onlystaff: false,
      title: 'Beneficio n',
      url: 'https://http2.mlstatic.com/D_NQ_NP_888270-MLA45805765296_052021-O.webp',
    };
    try {
      const data = await addDoc(collection(db, 'beneficios'), infoBeneficio);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
    getBenefits();
    addBeneficio();
  }, []);

  return (
    <div className='d-flex'>
      <Sidebar />
      <div className='d-flex flex-column'>
        <Table data={users} title={'Users'} />
        <Table data={benefits} title={'Benefits'} />
      </div>
    </div>
  );
};

export default App;
