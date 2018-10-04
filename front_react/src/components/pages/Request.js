import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import UserForm from '../form/LoginForm';
import PropTypes from 'prop-types';

const Request = () => (
  <div>
    <Header />
  </div>
);

Request.propTypes = {

};

const mapStateToProps = ({ signupReducer }) => {
  const { user } = signupReducer;
  return user;
};

const mapActionToProps = {
};
export default connect(mapStateToProps, mapActionToProps)(Request);
