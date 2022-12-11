import {
  getFirestore, getDocs, collection,
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
        console.log(doc.id);
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
  useEffect(() => {
    getUsers();
    getBenefits();
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
