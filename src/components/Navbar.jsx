import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button/Button';
import CartButton from './Button/CartButton';

const Navbar = () => {

 
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container py-2">
          <NavLink className="navbar-brand fw-bold fs-4" style={{color: '#5F021F'}}  to="/">WHATEVER!</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/signin" className="">
                <Button>
                <i className="fa fa-sign-in me-2"></i> Login</Button></NavLink>
            </div>
            <CartButton />
          </div>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;

