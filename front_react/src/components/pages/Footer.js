import React from 'react';
import footerOne from '../../img/contact-icon.png';
import footerTwo from '../../img/coffee.png';
import footerThree from '../../img/join.png';

const Footer = () => (
  <footer className="footer-container">
    <section>
      <div className="row">
        <div className="col-1-3 footer-content remove-gutter-xs">
          <img className="footer-img" src={footerOne} />
          <a>
            <h3>
                        Contact Us
            </h3>
          </a>
        </div>
        <div className="col-1-3 footer-content remove-gutter-xs">

          <img className="footer-img " src={footerTwo} />
          <a>
            <h3>
                        Read More
            </h3>
          </a>
        </div>
        <div className="col-1-3 footer-content remove-gutter-xs">

          <img className="footer-img " src={footerThree} />
          <a><h3 className="">Join Us</h3></a>
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
