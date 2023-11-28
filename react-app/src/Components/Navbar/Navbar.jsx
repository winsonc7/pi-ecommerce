import React from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/redcart.png'

const Navbar = () => {
  const location = useLocation();

  const shouldRenderNavbar = location.pathname !== '/';

  return shouldRenderNavbar ? (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" className="logo-image"/>
      </div>
      <div className="buttons">
        <Link to="/shop"> <button>Search</button> </Link>
        <Link to="/profile"> <button>My Profile</button> </Link>
        <Link to="/cart">
        <button>
          <img src={cart_icon} alt="Cart" className="cart-image"/>
        </button>
        </Link>
      </div>
    </div>
  ) : null
}

export default Navbar