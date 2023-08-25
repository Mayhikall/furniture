import React from 'react';
import { Link } from 'react-router-dom';
import DarkLightToggle from './DarkLightToggle';

export default function Navbar() {
  return (
    <>
      <nav className="navbar bg-light border-bottom border-primary border-2 shadow">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bolder text-primary" to="/">
            Furniture
          </Link>
          <ul className="nav">
            <DarkLightToggle />
            <li className="nav-item">
              <Link to="/" className="nav-link link-dark fw-semibold">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link link-dark fw-semibold">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/product" className="nav-link link-dark fw-semibold">
                Product
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
