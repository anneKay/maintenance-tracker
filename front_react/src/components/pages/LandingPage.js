import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const LandingPage = () => (
  <div>
    <Header
      className="header-primary"
      pathOne="/signup"
      pathTwo="/login"
      pathThree="/signup"
      navOne="Contact"
      navTwo="Login"
      navThree="Signup"
      pathname="/"
    />
    <main>
      <section className="body-section">
        <div className="container">
          <h1>
            Maintenance Tracker
          </h1>
          <h3>Repair, Maintain and Monitor </h3>
          <h3>your machineries with just one click</h3>

          <Link to="/signup"><button className="" type="button" name="button"> GET STARTED</button></Link>
        </div>
      </section>
    </main>

    <Footer />

  </div>
);
export default LandingPage;
