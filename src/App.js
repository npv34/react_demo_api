import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
       <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
       </Routes>
    </>
  );
}

export default App;
