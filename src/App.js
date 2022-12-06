import {
  getFirestore, getDocs, collection,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Table from './components/Table/Table';
import app from './db/firebase';

const db = getFirestore(app);

const App = () => {
  const [users, setUsers] = useState([]);
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
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className='d-flex'>
      <Sidebar />
      <Table users={users}/>
    </div>
  );
};

export default App;
