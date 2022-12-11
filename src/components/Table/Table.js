import React from 'react';
import { getKeys } from '../../helpers/getKeys';
import Modal from '../Modal/Modal';

const Table = (props) => {
  console.log(props.title);
  const columns = getKeys(props);
  return (
    <div className='d-flex flex-column'>
      <h2 style={{ margin: '8px 0px 8px 14rem' }}>{props.title}</h2>
      <button data-bs-toggle="modal" data-bs-target="#exampleModal" style={{
        width: '100px', height: '50px', backgroundColor: '#000', color: '#fff', position: 'absolute', left: '500px',
      }}>clickme</button>
      <table className="table" style={{ height: '200px', margin: '0 0 0 14rem', overflow: 'auto' }} >
        <thead>
          <tr>
            {columns?.map((titles) => <th key={titles}>{titles}</th>)}
          </tr>
        </thead>
        <tbody>
          {
            props?.data?.map((value, index) => (
              <tr key={index}>
                {
                  columns?.map((title) => <td key={title}>{value[title]}</td>)
                }
              </tr>
            ))
          }
        </tbody>
      </table>
      <Modal />
    </div>
  );
};

export default Table;
