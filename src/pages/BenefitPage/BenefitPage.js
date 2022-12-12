import { useEffect, useState } from 'react';
import {
  doc, addDoc, updateDoc, getFirestore, getDocs, collection,
} from 'firebase/firestore';
import { Table } from '../../components';
import app from '../../db/firebase';

const db = getFirestore(app);

const BenefitPage = () => {
  const [benefits, setBenefits] = useState([]);

  const getBenefits = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'beneficios'));
      querySnapshot.forEach((docu) => {
        setBenefits((prev) => [...prev, docu.data()]);
      });
    } catch (error) {
      console.error(error);
    }
  };

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
    } catch (error) {
      console.error(error);
    }
  };

  const updateBeneficios = async () => {
    const beneficioRef = doc(db, 'beneficios', '1xWK8guahm9EIg5O7GpM');

    await updateDoc(beneficioRef, {
      onlystaff: true,
    });
  };

  const deleteBeneficios = async () => {
    const beneficioRef = doc(db, 'beneficios', '1xWK8guahm9EIg5O7GpM');

    await updateDoc(beneficioRef, {
      isactive: true,
    });
  };

  useEffect(() => {
    getBenefits();
  }, []);

  if (!benefits) return null;

  return (
    <div className='d-flex flex-column'>
      <Table data={benefits} title={'Benefits'} />
    </div>
  );
};

export default BenefitPage;