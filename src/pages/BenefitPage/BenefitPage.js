import { useEffect, useState } from 'react';
import {
  doc, addDoc, updateDoc, getFirestore, getDocs, collection, deleteDoc,
} from 'firebase/firestore';
import { Spinner, Table } from '../../components';
import app from '../../db/firebase';

const db = getFirestore(app);

const BenefitPage = () => {
  const [benefits, setBenefits] = useState([]);

  const getBenefits = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'beneficios'));
      querySnapshot.forEach((docu) => {
        setBenefits((prev) => [...prev, {
          ...docu.data(),
          id: docu.id,
        }]);
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBenefits();
  }, []);

  if (benefits.length === 0) return <Spinner />;

  return (
    <div className='d-flex flex-column'>
      <Table data={benefits} title={'Beneficios'} />
    </div>
  );
};

export default BenefitPage;
