import React from 'react';
import CartWidget from './CartWidget';
// import logo from '../images/logo.png';

function NavBar() {
    return (
      <nav className='navbar'>
        <div className='navbar-left'>
          <img className='logo' src="../images/logo.png" alt="" />
          <ul className='menu'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
          </ul>    
        </div>      
        <CartWidget />        
      </nav>
    );
}

export default NavBar;