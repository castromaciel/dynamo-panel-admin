import React, { } from 'react';
import { getKeys } from '../../helpers/getKeys';

const Table = (props) => {
  const columns = getKeys(props);
  return (
    <table className="table" style={{ height: '200px', margin: '0 0 0 14rem', overflow: 'auto' }} >
      <thead>
        <tr>
          { columns?.map((titles) => <th key={titles}>{ titles }</th>)}
        </tr>
      </thead>
      <tbody>
        {
          props?.users?.map((user) => (
            <tr key={user.email}>
              {
                columns?.map((data) => <td key={data}>{ user[data] }</td>)
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default Table;
