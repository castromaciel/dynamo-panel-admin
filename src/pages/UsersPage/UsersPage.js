import { useEffect, useState } from 'react';
import {
  getFirestore, getDocs, collection,
} from 'firebase/firestore';
import { Table, Spinner } from '../../components';
import app from '../../db/firebase';

const db = getFirestore(app);

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'usuarios'));
      querySnapshot.forEach((docu) => {
        setUsers(
          (prev) => [
            ...prev, {
              ...docu.data(),
              id: docu.id,
            },
          ],
        );
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (users.length === 0) return <Spinner />;

  return (
    <div className='d-flex flex-column'>
      <Table data={users} title={'Usuarios'} />
    </div>
  );
};

export default UsersPage;
