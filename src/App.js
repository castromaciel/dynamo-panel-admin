import {
  doc, addDoc, updateDoc, getFirestore, getDocs, collection,
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
      querySnapshot.forEach((docu) => {
        setUsers((prev) => [...prev, docu.data()]);
      });
    } catch (error) {
      console.error(error);
    }
  };
  const getBenefits = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'beneficios'));
      querySnapshot.forEach((docu) => {
        console.log(docu);
        setBenefits((prev) => [...prev, docu.data()]);
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Agrega un registro al documento beneficio
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
      console.error(error);
    }
  };

  // Update Documento Beneficio
  const updateBeneficios = async () => {
    const beneficioRef = doc(db, 'beneficios', '1xWK8guahm9EIg5O7GpM');

    // Set the "onlystaff" field of the document x id '1xWK8guahm9EIg5O7GpM'
    await updateDoc(beneficioRef, {
      onlystaff: true,
    });
  };

  // Delete Logic Beneficio
  const deleteBeneficios = async () => {
    const beneficioRef = doc(db, 'beneficios', '1xWK8guahm9EIg5O7GpM');

    // Set the "isactive" field of the document x id '1xWK8guahm9EIg5O7GpM'
    await updateDoc(beneficioRef, {
      isactive: true,
    });
  };

  useEffect(() => {
    getUsers();
    getBenefits();
    addBeneficio();
    updateBeneficios();
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
