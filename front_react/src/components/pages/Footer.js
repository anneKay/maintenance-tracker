import React from 'react';
import { Link } from 'react-router-dom';
import footerOne from '../../img/contact-icon.png';
import footerTwo from '../../img/coffee.png';
import footerThree from '../../img/join.png';

const Footer = () => (
  <footer className="footer-container">
    <section>
      <div className="row">
        <div className="col-1-3 footer-content remove-gutter-xs">
          <img alt="" className="footer-img" src={footerOne} />
          <Link to="/">
            <h3>Contact Us</h3>
          </Link>
        </div>
        <div className="col-1-3 footer-content remove-gutter-xs">
          <img alt="" className="footer-img " src={footerTwo} />
          <Link to="/">
            <h3>Read More </h3>
          </Link>
        </div>
        <div className="col-1-3 footer-content remove-gutter-xs">
          <img alt="/" className="footer-img " src={footerThree} />
          <Link to="/signup"><h3 className="">Join Us</h3></Link>
        </div>
      </div>
    </section>
    <section className="copyright">
      <div>
        <small>&copy; Copyright 2018, Maintenance Tracker</small>
      </div>
    </section>
  </footer>

);
export default Footer;
