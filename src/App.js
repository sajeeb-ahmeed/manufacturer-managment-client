import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar';
import { Route, Routes } from 'react-router';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';


function App() {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>

    </div>
  );
}

export default App;