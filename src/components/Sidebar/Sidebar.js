import React from 'react';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: '14rem', height: '100vh', position: 'fixed' }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none text-white">
        <span className="fs-4">Administration</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto text-white">
        <li className="nav-item">
          <a href="#" className="nav-link active" aria-current="page">
            <i className='bi bi-person me-3'></i>
            Users
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark text-white">
            <i className='bi bi-stack me-3'></i>
            Benfits
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Sidebar;
