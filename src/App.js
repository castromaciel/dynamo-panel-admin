import { Navigate, Route, Routes } from 'react-router-dom';
import { Sidebar } from './components';
import { BenefitPage, UsersPage } from './pages';

const App = () => {
  return (
    <div className='d-flex'>
      <Sidebar />
      <Routes>
        <Route exact path='/' element={<Navigate from='/' to='/users' />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="benefits" element={<BenefitPage />} />
      </Routes>
    </div>
  );
};

export default App;
