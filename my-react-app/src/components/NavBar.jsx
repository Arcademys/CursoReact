import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav>
      <div>
        <img src="/my-react-app/public/logo.png" alt="Store Logo" style={{ width: '100px' }} />
      </div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Productos</a></li>
        <li><a href="#about">Nosotros</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;