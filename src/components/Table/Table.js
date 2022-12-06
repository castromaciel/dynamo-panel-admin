import React, { } from 'react';
import { getKeys } from '../../helpers/getKeys';

const Table = (props) => {
  console.log(props.title);
  const columns = getKeys(props);
  return (
    <div className='d-flex flex-column'>
      <h2 style={{ margin: '8px 0px 8px 14rem' }}>{props.title}</h2>
      <table className="table" style={{ height: '200px', margin: '0 0 0 14rem', overflow: 'auto' }} >
        <thead>
          <tr>
            { columns?.map((titles) => <th key={titles}>{ titles }</th>)}
          </tr>
        </thead>
        <tbody>
          {
            props?.data?.map((value, index) => (
              <tr key={index}>
                {
                  columns?.map((title) => <td key={title}>{ value[title] }</td>)
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
