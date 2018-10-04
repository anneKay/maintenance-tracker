import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../img/mt-logo.png';

const Header = ({
  id, headerName, pathOne, pathThree, navThree, pathTwo, navOne, navTwo, className, pathname,
}) => (
  <header id={id} className={className}>
    <div>
      {(pathname === '/' || pathname === '/login' || pathname === '/signup') ? (
        <NavLink to="/" className="logo logo-primary">
          <img alt="" className="logo" src={logo} />
        </NavLink>
      ) : (pathname === '/profile') ? (
        <Link to="/profile" className="logo">

          <h3>
            Welcome &nbsp;&nbsp;
            {headerName}
          </h3>
        </Link>
      ) : <Link to="/profile"><h3>Dashboard</h3></Link>}
      <nav className="nav nav-primary">
        {pathOne ? <NavLink to={pathOne} activeClassName="is-active" className="btn btn-nav" exact>{navOne}</NavLink> : <input className="search" id="search" type="text" placeholder="Search by status" name="search" /> }
        <NavLink to={pathTwo} activeClassName="is-active" className="btn btn-nav">{navTwo}</NavLink>
        <NavLink to={pathThree} activeClassName="is-active" className="btn btn-nav">{navThree}</NavLink>

      </nav>
    </div>
  </header>

);

Header.defaultProps = {
  id: '',
  pathname: '',
  headerName: '',
};

Header.propTypes = {
  id: PropTypes.string,
  headerName: PropTypes.string,
  pathOne: PropTypes.string.isRequired,
  pathTwo: PropTypes.string.isRequired,
  navOne: PropTypes.string.isRequired,
  navTwo: PropTypes.string.isRequired,
  navThree: PropTypes.string.isRequired,
  pathThree: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  pathname: PropTypes.string,
};
export default Header;
