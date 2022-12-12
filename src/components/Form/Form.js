import React from 'react';
import './style.css';

function Form({ title }) {
  return (
    <div >
      {
        ((title === 'Users')
          && (<form style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', marginLeft: '1.5rem' }}>
            <div className='inputContainer'>
              <p className='titleInput'>Full Name</p>
              <input className='input' type='text'></input>
            </div>
            <div className='inputContainer'>
              <p className='titleInput'>Email</p>
              <input className='input' type='email'></input>
            </div>
            <div className='inputContainer'>
              <p className='titleInput'>Photo</p>
              <input className='input' type='text'></input>
            </div>
            <div className='inputContainer'>
              <p className='titleInput'>Role</p>
              <select className='input'>
                <option value="user">User</option>
                <option value="staff">Staff</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className='inputContainer'>
              <p className='titleInput'>Password</p>
              <input className='input' type='password' />
            </div>
            <div className='inputContainer'>
              <p className='titleInput'>Confirm Password</p>
              <input className='input' type='password' />
            </div>
            <div className='inputContainer'>
              <p className='titleInput'>Phone Number</p>
              <input className='input' type='number' />
            </div>
          </form>))
        || <form className='formContainer'>
          <div className='inputContainer'>
            <p className='titleInput'>Name</p>
            <input className='input' type='text'></input>
          </div>
          <div className='inputContainer'>
            <p className='titleInput'>Button Label</p>
            <input className='input' type='text'></input>
          </div>
          <div className='inputContainer'>
            <p className='titleInput'>Photo</p>
            <input className='input' type='text' />
          </div>
          <div className='inputContainer'>
            <p className='titleInput'>Staff Only</p>
            <input className='checkbox' type='checkbox' />
          </div>
          <div className='inputContainer' style={{ gridColumnStart: 1, gridRowStart: 3, gridColumnEnd: 3 }}>
            <p className='titleInput' >Description</p>
            <textarea className='input' rows={3} style={{ width: '90%' }}></textarea>
          </div>
        </form>
      }

    </div >
  );
}

export default Form;
