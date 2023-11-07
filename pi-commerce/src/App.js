import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Cart from './Pages/Cart'
import Profile from './Pages/Profile'
import Search from './Pages/Search'
import BobaHouse from './Pages/BobaHouse'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/cart' element={<Cart/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path='/bobahouse' element={<BobaHouse/>} />
        <Route path='/' element={<Search/>} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
