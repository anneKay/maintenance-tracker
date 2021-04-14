import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignupForm from '../form/SignupForm';
import signup from '../../actions/signup';
import Header from '../pages/Header';

export class Signup extends Component {
  submit = (data, history) => {
    const { signupUser } = this.props;
    signupUser(data.name, data.email, data.password, history);
    return data;
  }

  render() {
    const { history, error } = this.props;
    return (
      <div>
        <Header
          id="login-header"
          className="header-primary"
          pathOne="/signup"
          pathTwo="/login"
          pathThree="/signup"
          navOne="Contact"
          navTwo="Login"
          navThree="Signup"
          pathname="/signup"
        />
        <div className="container">
          <div className="form-container form-auth">
            <SignupForm submit={this.submit} error={error} history={history} />
          </div>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  signupUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
  }).isRequired,
};

export const mapStateToProps = ({ signupReducer }) => {
  const { error } = signupReducer;
  return error;
};

const mapActionToProps = {
  signupUser: signup,
};
export default connect(mapStateToProps, mapActionToProps)(Signup);
