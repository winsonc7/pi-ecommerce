import React from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart.png'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" className="logo-image"/>
      </div>
      <div className="buttons">
        <button>Search</button>
        <button>My Profile</button>
        <button>
          <img src={cart_icon} alt="Cart" className="cart-image"/>
        </button>
      </div>
    </div>
  )
}
