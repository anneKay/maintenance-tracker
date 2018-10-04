import React from 'react';
import Header from './Header';
import Footer from './Footer';
import history from '../../history';

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
      pathname={history.location.pathname}
    />
    <main>
      <section className="body-section">
        <div className="container">
          <h1>
            Maintenance Tracker
          </h1>
          <h3>Repair, Maintain and Monitor </h3>
          <h3>your machineries with just one click</h3>

          <a href="../html/signup.html"><button className="" type="button" name="button"> GET STARTED</button></a>
        </div>
      </section>
    </main>

    <Footer />

  </div>
);
export default LandingPage;
