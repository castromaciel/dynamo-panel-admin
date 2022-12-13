import React from 'react';
import './style.css';
import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';
import { benefitSchema, userSchema } from '../../validations';

function Form({ title, handlerSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
    delayError: 1200,
  });

  return (
    <div className='container'>
      {(title === 'Usuarios' && (
        <form id='inscribeForm' onSubmit={handleSubmit(handlerSubmit)}>
          <div className='row'>
            <div className='col'>
              <label className='form-label'>Nombre Completo</label>
              <input
                className='form-control'
                type='text'
                {...register('fullName', { ...userSchema().fullName })}
              />
              <ErrorMessage
                  errors={errors}
                  name="fullName"
                  render={({ message }) => (
                    <small
                      id="fullName"
                      className="invalid_feedback"
                    >
                      {message}
                    </small>
                  )}
                />
            </div>
            <div className='col'>
              <label className='form-label'>Email</label>
              <input
                className='form-control'
                type='email'
                {...register('email', { ...userSchema().email })}
              />
               <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ message }) => (
                    <small
                      id="email"
                      className="invalid_feedback"
                    >
                      {message}
                    </small>
                  )}
                />
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col'>
              <label className='form-label'>Imagen URL</label>
              <input
                type='text'
                className='form-control'
                {...register('avatar', { ...userSchema().avatar })}
              />
               <ErrorMessage
                  errors={errors}
                  name="avatar"
                  render={({ message }) => (
                    <small
                      id="avatar"
                      className="invalid_feedback"
                    >
                      {message}
                    </small>
                  )}
                />
            </div>
            <div className='col'>
              <label className='form-label'>Rol</label>
              <select
                className='form-select'
                defaultValue='user'
                {...register('role', { ...userSchema().role })}
              >
                <option value='admin'>Admin</option>
                <option value='staff'>Staff</option>
                <option value='user'>User</option>
              </select>
              <ErrorMessage
                  errors={errors}
                  name="role"
                  render={({ message }) => (
                    <small
                      id="role"
                      className="invalid_feedback"
                    >
                      {message}
                    </small>
                  )}
                />
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col'>
              <label className='form-label'>Contraseña</label>
              <input
                type='password'
                className='form-control'
                {...register('password', { ...userSchema().password })}
              />
               <ErrorMessage
                  errors={errors}
                  name="password"
                  render={({ message }) => (
                    <small
                      id="password"
                      className="invalid_feedback"
                    >
                      {message}
                    </small>
                  )}
                />
            </div>
            <div className='col'>
              <label className='form-label'>Repita su Contraseña</label>
              <input
                type='password'
                className='form-control'
                {...register('confirmPassword', {
                  ...userSchema().confirmPassword,
                })}
              />
            <ErrorMessage
                  errors={errors}
                  name="confirmPassword"
                  render={({ message }) => (
                    <small
                      id="confirmPassword"
                      className="invalid_feedback"
                    >
                      {message}
                    </small>
                  )}
                />
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col'>
              <label className='form-label'>Número de Celular</label>
              <input
                type='text'
                className='form-control'
                {...register('phoneNumber', { ...userSchema().phoneNumber })}
              />
               <ErrorMessage
                  errors={errors}
                  name="phoneNumber"
                  render={({ message }) => (
                    <small
                      id="phoneNumber"
                      className="invalid_feedback"
                    >
                      {message}
                    </small>
                  )}
                />
            </div>
            <div className='col'></div>
          </div>
        </form>
      )) || (
        <form id='inscribeForm' onSubmit={handleSubmit(handlerSubmit)}>
          <div className='row'>
            <div className='col'>
              <label className='form-label'>Título</label>
              <input
                type='text'
                className='form-control'
                {...register('benefitName', { ...benefitSchema().title })}
              />
              <ErrorMessage
                  errors={errors}
                  name="benefitName"
                  render={({ message }) => (
                    <small
                      id="benefitName"
                      className="invalid_feedback"
                    >
                      {message}
                    </small>
                  )}
                />
            </div>
            <div className='col'>
              <label className='form-label'>Etiqueta del Botón</label>
              <input
                type='text'
                className='form-control'
                {...register('buttonLabel', { ...benefitSchema().buttonLabel })}
              />
              <ErrorMessage
                  errors={errors}
                  name="buttonLabel"
                  render={({ message }) => (
                    <small
                      id="buttonLabel"
                      className="invalid_feedback"
                    >
                      {message}
                    </small>
                  )}
                />
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col'>
              <label className='form-label'>URL Imagen</label>
              <input
                type='text'
                className='form-control'
                {...register('urlImage', { ...benefitSchema().url })}
              />
              <ErrorMessage
                  errors={errors}
                  name="urlImage"
                  render={({ message }) => (
                    <small
                      id="urlImage"
                      className="invalid_feedback"
                    >
                      {message}
                    </small>
                  )}
                />
            </div>
            <div className='col'>
              <label className='form-label'>¿Es miembro de staff?</label>
              <select
                className='form-select'
                {...register('isStaff', { ...benefitSchema().onlyStaff })}
                defaultValue='no'
              >
                <option value='no'>No</option>
                <option value='yes'>Si</option>
              </select>
              <ErrorMessage
                  errors={errors}
                  name="isStaff"
                  render={({ message }) => (
                    <small
                      id="isStaff"
                      className="invalid_feedback"
                    >
                      {message}
                    </small>
                  )}
                />
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col'>
              <label className='form-label'>Descripción</label>
              <textarea
                className='form-control'
                rows='4'
                {...register('description', { ...benefitSchema().description })}
              />
              <ErrorMessage
                  errors={errors}
                  name="description"
                  render={({ message }) => (
                    <small
                      id="description"
                      className="invalid_feedback"
                    >
                      {message}
                    </small>
                  )}
                />
            </div>
          </div>
          <input type="submit" />
        </form>
      )}
    </div>
  );
}

export default Form;
