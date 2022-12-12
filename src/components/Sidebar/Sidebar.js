import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none text-white">
        <span className="fs-4">Administration</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto text-white">
        <li className="nav-item">
          <NavLink to={'/users'} className="nav-link text-white" aria-current="page">
            <i className='bi bi-person me-3'></i>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to={'/benefits'} className="nav-link text-white">
            <i className='bi bi-stack me-3'></i>
            Benfits
          </NavLink>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Sidebar;
