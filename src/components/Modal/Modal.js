import React from 'react';
import Form from '../Form/Form';

function Modal({ title }) {
  const handlerSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className='modal fade' id='formModal' tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h1 className='modal-title fs-5' id='exampleModalLabel'>{title}</h1>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
          </div>
          <div className='modal-body' >
            <Form title={title} handlerSubmit={handlerSubmit}/>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal' >Close</button>
            <button type='submit' form="inscribeForm" className='btn btn-primary' onClick={() => handlerSubmit}>Confirm</button>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Modal;
