import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import UserForm from '../form/LoginForm';
import login from '../../actions/login';
import PropTypes from 'prop-types';


class LoginPage extends React.Component{
	submit = data => {
    this.props.login(data.email, data.password);
    console.log(data);
    return data;
	}
  render() {
    return (
      <div>
        <Header id="login-header" />
        <main className="container">
          <div className="form-container">
            <UserForm submit={this.submit} />
          </div>

        </main>
      </div>
    );
  }
}



LoginPage.PropTypes = {
  login: PropTypes.func.isRequired,
  login: PropTypes.object.isRequired
}
 

const mapStateToProps = ({ signupReducer }) => {
  const { user } = signupReducer;
  return user;
};

const mapActionToProps = {
  login,
};
export default connect(mapStateToProps, mapActionToProps)(LoginPage);

