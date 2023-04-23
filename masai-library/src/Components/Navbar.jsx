import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/user/signup">User</a></li>
        <li><a href="/admin">Admin</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;