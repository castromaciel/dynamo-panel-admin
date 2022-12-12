import React from 'react';
import { getKeys } from '../../helpers/getKeys';
import Modal from '../Modal/Modal';

const Table = ({ data, title }) => {
  const columns = getKeys(data);
  return (
    <div className='d-flex flex-column' style={{ width: 'calc(100vw - 15rem)' }}>
      <h2 style={{ margin: '8px 0px 8px 14rem' }}>{title}</h2>
      <button data-bs-toggle="modal" data-bs-target="#exampleModal" style={{
        width: '100px', height: '50px', backgroundColor: '#000', color: '#fff', position: 'absolute', left: '500px',
      }}>clickme</button>
      <table className="table" style={{ height: 'auto', margin: '0 0 0 13.25rem' }} >
        <thead>
          <tr>
            {columns?.map((titles) => <th key={titles}>{titles}</th>)}
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {
            data?.map((value, index) => (
              <tr key={index}>
                {
                  columns?.map((colTitle) => <td key={colTitle}>{value[colTitle]}</td>)
                }
                <td>
                  <div className='w-100 d-flex justify-content-around'>
                    <i className='bi bi-trash'></i>
                    <i className='bi-pencil-square'></i>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <Modal data={data} title={title} />
    </div>
  );
};

export default Table;
