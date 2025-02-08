import React, { useState } from 'react';
import './NavBar.css';

function Navbar({ cartCount }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">🛍️ ShopEasy</h1>
      
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
      
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      
      <div className="cart-icon">
        🛒 Cart <span className="cart-count">{cartCount}</span>
      </div>
    </nav>
  );
}

export default Navbar;
