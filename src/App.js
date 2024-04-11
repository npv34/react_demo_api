import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AddUser from './pages/AddUser/AddUser';
import UpdateUser from './pages/UpdateUser/UpdateUser';

function App() {
  return (
    <>
       <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/create' element={<AddUser />} />
          <Route path='/users/:id/update' element={<UpdateUser />} />

       </Routes>
    </>
  );
}

export default App;
