import React from 'react';
import Header from './Header';
import Footer from './Footer';
import UserForm from '../form/Form';

const SignupPage = () => (
  <div>
    <Header id="login-header" />
    <main className="container">
      <div className="form-container">
        <UserForm />
      </div>

    </main>

  </div>
);
export default SignupPage;
