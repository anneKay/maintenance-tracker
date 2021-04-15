import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import UserForm from '../form/LoginForm';
import login from '../../actions/login';
import Header from './Header';


export class LoginPage extends React.Component {
  state = {
    loading: false,
  }

submit = (data, history) => {
  this.setState({ loading: true });
  const { login } = this.props;
  login(data.email, data.password, history)
    .then(() => { this.setState({ loading: false }); })
    .catch(() => { this.setState({ loading: false }); });
  return data;
}

render() {
  const { history, error } = this.props;
  const { loading } = this.state;
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
        <Loader active={loading} />
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
