import React from 'react';
import Swal from 'sweetalert2';
import { getFirestore, doc, deleteDoc } from 'firebase/firestore';
import { getKeys } from '../../helpers';
import Modal from '../Modal/Modal';
import './table.css';
import app from '../../db/firebase';

const db = getFirestore(app);

const Table = ({ data, title }) => {
  const deleteRowData = async (id) => {
    const titleRef = doc(db, title.toLowerCase(), id);
    await deleteDoc(titleRef);

    Swal.fire({
      icon: 'success',
      title: `${title.slice(0, -1)} eliminado exitosamente`,
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => window.location.reload(), 1500);
  };
  const columns = getKeys(data);
  return (
    <div className='d-flex flex-column' style={{ width: 'calc(100vw - 15rem)' }}>
      <div className='d-flex align-items-center'>
        <h2 style={{ margin: '8px 0px 8px 14rem' }}>{title}</h2>
        <i
          className='bi bi-plus-circle'
          style={{ fontSize: '25px', marginTop: '5px', marginLeft: '1rem' }}
          data-bs-toggle='modal'
          data-bs-target='#exampleModal'
        ></i>
      </div>
      <table className='table' style={{ height: 'auto', margin: '0 0 0 13.25rem' }} >
        <thead>
          <tr>
            {columns?.map((titles) => <th key={titles}>{titles}</th>)}
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {
            data?.map((value, index) => (
              <tr key={index} id={value.id}>
                {
                  columns?.map(
                    (colTitle) => (<td key={colTitle} id={colTitle}>{value[colTitle]}</td>),
                  )
                }
                <td>
                  <div className='w-100 d-flex justify-content-around'>
                    <i className='bi bi-trash' onClick={(e) => {
                      Swal.fire({
                        title: `¿Está seguro que deseas eliminar este ${title.slice(0, -1).toLowerCase()}?`,
                        text: 'No podrá revertir estos cambios, y la información se perderá para siempre.',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#d33',
                        cancelButtonColor: '#3085d6',
                        confirmButtonText: 'Eliminar',
                      }).then((result) => {
                        if (result.isConfirmed) deleteRowData(e.nativeEvent.path[3].id);
                      });
                    }}></i>
                    <i className='bi bi-pencil-square' data-bs-toggle='modal' data-bs-target='#exampleModal'></i>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <Modal data={data} title={title} />
    </div >
  );
};

export default Table;
