import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignupForm from '../form/SignupForm';
import signup from '../../actions/signup';
import Header from '../pages/Header';

class Signup extends Component {
  state = {
    user: [],
  }
  submit = (data, history) => {
    this.props.signup(data.name, data.email, data.password, history);
    return data;
  }

  render() {
    const { history } = this.props;
    return (
      <div>
        <Header id="login-header" className="header-primary" pathOne="/signup"
         pathTwo="/login" pathThree="/signup" navOne="Contact" 
         navTwo="Login" navThree="Signup" pathname="/signup"/>
        <div className="container">
        <div className="form-container">
          <SignupForm submit={this.submit} history={history}/> 
        </div> 
        </div>
      </div>
    )
  }
}

Signup.PropTypes = {
  login: PropTypes.func.isRequired,
  login: PropTypes.object.isRequired
}
 

const mapStateToProps = ({ signupReducer }) => {
  const { user } = signupReducer;
  console.log('user', user)
  return user;
};

const mapActionToProps = {
  signup,
};
export default connect(mapStateToProps, mapActionToProps)(Signup);

