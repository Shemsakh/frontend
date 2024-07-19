import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Registration</Link></li>
        <li><Link to="/">Vote</Link></li>
        <li><Link to="/">Reports</Link></li>
        <li><Link to="/">About Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
