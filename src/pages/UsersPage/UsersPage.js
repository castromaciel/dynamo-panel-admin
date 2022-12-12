import { useEffect, useState } from 'react';
import {
  getFirestore, getDocs, collection,
} from 'firebase/firestore';
import { Modal, Table } from '../../components';
import app from '../../db/firebase';

const db = getFirestore(app);

const UsersPage = () => {
  const [users, setUsers] = useState([]);
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

  useEffect(() => {
    getUsers();
  }, []);

  if (!users) return null;

  return (
    <div className='d-flex flex-column'>
      <Table data={users} title={'Users'} />
    </div>
  );
};

export default UsersPage;
