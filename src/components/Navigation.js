// src/components/Navigation.js

import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/products" activeClassName="active">Products</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
