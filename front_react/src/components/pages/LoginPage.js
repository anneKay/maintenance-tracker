import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserForm from '../form/LoginForm';
import login from '../../actions/login';
import Header from './Header';


export class LoginPage extends React.Component {
submit = (data, history) => {
  const { login } = this.props;
  login(data.email, data.password, history);
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
        pathname="/login"
      />
      <main className="container">
        <div className="form-container form-auth">
          <UserForm
            submit={this.submit}
            error={error}
            history={history}
          />
        </div>
      </main>
    </div>
  );
}
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
  error: PropTypes.shape({}),
};

export const mapStateToProps = ({ signupReducer }) => {
  const { error } = signupReducer;
  return error;
};

const mapActionToProps = {
  login,
};
export default connect(mapStateToProps, mapActionToProps)(LoginPage);
