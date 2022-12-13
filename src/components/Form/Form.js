import React from 'react';
import './style.css';
import { useForm } from 'react-hook-form';
import { benefitSchema, userSchema } from '../../validations';

function Form({ title }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className='container'>
      {(title === 'Usuarios' && (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='row'>
          <div className='col'>
            <label className='form-label'>Nombre Completo</label>
            <input className='form-control' type='text' {...register('fullName', { ...userSchema().fullname })} />
          </div>
          <div className='col'>
            <label className='form-label'>Email</label>
            <input className='form-control' type='email' {...register('email', { ...userSchema().email })} />
          </div>
        </div>
        <div className='row mt-2'>
          <div className='col'>
            <label className='form-label'>URL Imagen</label>
            <input type='text' className='form-control' {...register('imageURL', { ...userSchema().avatar })} />
          </div>
          <div className='col'>
            <label className='form-label'>Rol</label>
            <select className='form-select' defaultValue='user' {...register('role', { ...userSchema().role })}>
              <option value='admin'>Admin</option>
              <option value='staff'>Staff</option>
              <option value='user' >User</option>
            </select>
          </div>
        </div>
        <div className='row mt-2'>
          <div className='col'>
            <label className='form-label'>Contraseña</label>
            <input type='password' className='form-control' {...register('password', { ...userSchema().password })}/>
          </div>
          <div className='col'>
            <label className='form-label'>Repita su contraseña</label>
            <input type='password' className='form-control' {...register('confirmPassword', { ...userSchema().confirmPassword })}/>
          </div>
        </div>
        <div className='row mt-2'>
          <div className='col'>
            <label className='form-label'>Número de Celular</label>
            <input type='text' className='form-control' {...register('phoneNumber', { ...userSchema().phoneNumber })}/>
          </div>
          <div className='col'></div>
        </div>
        <input type="submit" />
      </form>
      )) || (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col">
              <label className='form-label'>Nombre</label>
              <input type="text" className='form-control' {...register('benefitName', { ...benefitSchema().title })} />
            </div>
            <div className="col">
              <label className='form-label'>Etiqueta del Botón</label>
              <input type="text" className='form-control' {...register('buttonLabel', { ...benefitSchema().buttonLabel })}/>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <label className='form-label'>URL Imagen</label>
              <input type="text" className='form-control' {...register('imageURL', { ...benefitSchema().url })} />
            </div>
            <div className="col">
              <label className='form-label'>¿Es miembro de staff?</label>
              <select className='form-select' defaultValue='no' {...register('isStaff', { ...benefitSchema().onlyStaff })}>
              <option value='no'>No</option>
              <option value='yes'>Si</option>
            </select>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <label className='form-label'>Descripción</label>
              <textarea className="form-control" rows="4" {...register('description', { ...benefitSchema().description })}></textarea>
            </div>
          </div>
          <input type="submit"/>
      </form>
      )}
    </div>
  );
}

export default Form;
