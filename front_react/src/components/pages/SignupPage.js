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
  submit = data => {
    this.props.signup(data.name, data.email, data.password);
    return data;
  }

  render() {
    return (
      <div>
        <Header id="login-header"/>
        <div className="container">
        <div className="form-container">
          <SignupForm submit={this.submit}/> 
        </div> 
        </div>
      {/* <p>{itemsArray}</p>  */}
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
  return user;
};

const mapActionToProps = {
  signup,
};
export default connect(mapStateToProps, mapActionToProps)(Signup);

