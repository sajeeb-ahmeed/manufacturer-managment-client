import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar';
import { Route, Routes } from 'react-router';
import Home from './Pages/Home/Home';


function App() {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;