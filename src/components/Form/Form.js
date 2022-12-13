import React from 'react';
import './style.css';

function Form({ title }) {
  return (
    <div className='container'>
      {(title === 'Users' && (
        <form>
        <div className='row'>
          <div className='col'>
            <label className='form-label'>Nombre Completo</label>
            <input className='form-control' type='text' />
          </div>
          <div className='col'>
            <label className='form-label'>Email</label>
            <input className='form-control' type='email' />
          </div>
        </div>
        <div className='row mt-2'>
          <div className='col'>
            <label className='form-label'>Imagen</label>
            <input type='text' className='form-control' />
          </div>
          <div className='col'>
            <label className='form-label'>Rol</label>
            <select className='form-select'>
              <option selected>Seleccione un rol</option>
              <option value='admin'>Admin</option>
              <option value='staff'>Staff</option>
              <option value='user'>User</option>
            </select>
          </div>
        </div>
        <div className='row mt-2'>
          <div className='col'>
            <label className='form-label'>Contraseña</label>
            <input type='password' className='form-control' />
          </div>
          <div className='col'>
            <label className='form-label'>Repita su contraseña</label>
            <input type='password' className='form-control' />
          </div>
        </div>
        <div className='row mt-2'>
          <div className='col'>
            <label className='form-label'>Número de Celular</label>
            <input type='text' className='form-control' />
          </div>
          <div className='col'></div>
        </div>
      </form>
      )) || (
        <form >
          <div className="row">
            <div className="col">
              <label className='form-label'>Nombre</label>
              <input type="text" className='form-control' />
            </div>
            <div className="col">
              <label className='form-label'>Etiqueta del Botón</label>
              <input type="text" className='form-control' />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <label className='form-label'>Imagen</label>
              <input type="text" className='form-control' />
            </div>
            <div className="col">
              <label className='form-label'>¿Es miembro de staff?</label>
              <select className='form-select'>
              <option selected>Seleccione una opción</option>
              <option value='no'>No</option>
              <option value='yes'>Si</option>
            </select>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <label className='form-label'>Descripción</label>
              <textarea className="form-control" rows="4"></textarea>
            </div>
          </div>
      </form>
      )}
    </div>
  );
}

export default Form;
