import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import UserForm from '../form/LoginForm';
import login from '../../actions/login';
import PropTypes from 'prop-types';


export class LoginPage extends React.Component{

	submit = (data, history) => {
    this.props.login(data.email, data.password, history);
    return data;
	}
  render() {
    const { history, error } = this.props;
    return (
      <div>
        <Header id="login-header" className="header-primary"
         pathOne="/signup" pathTwo="/login" pathThree="/signup" 
         navOne="Contact" navTwo="Login" navThree="Signup" pathname="/login"/>
        <main className="container">
          <div className="form-container">
            <UserForm submit={this.submit} error={error} history={history}/>
          </div>

        </main>
      </div>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
}
 

export const mapStateToProps = ({ signupReducer }) => {
  const { error } = signupReducer;
    return error;
};

const mapActionToProps = {
  login,
};
export default connect(mapStateToProps, mapActionToProps)(LoginPage);

