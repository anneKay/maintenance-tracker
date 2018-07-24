import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../img/mt-logo.png';

const Header = (props) => (
  <header id={props.id} className="header-primary">
    <div>
      <NavLink to="/" className="logo logo-primary">
        <img alt="" className="logo" src={logo} />
      </NavLink>
      <nav className="nav nav-primary">

        <NavLink to="/" activeClassName="is-active" className="btn btn-nav" exact>Contact</NavLink>
        <NavLink to="/login" activeClassName="is-active" className="btn btn-nav">Login</NavLink>
        <NavLink to="../signup" activeClassName="is-active" className="btn btn-nav">Signup</NavLink>

      </nav>
    </div>
  </header>

);
export default Header;
