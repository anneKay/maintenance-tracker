import React from 'react';
import { Form, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import validator from 'validator';
import PropTypes from 'prop-types';
import FormField from './InputFormField';

class UserForm extends React.Component {
    state = {
      data: {
        email: '',
        password: '',
      },
      errors: {},
    };

onChange = (event) => {
  const { data } = this.state;
  this.setState({
    data: {
      ...data,
      [event.target.name]: event.target.value,
    },
    errors: {},
    loading: false,
  });
}

validate = (data) => {
  const errors = {};
  if (data.password && data.password.length < 5) errors.password = 'password must not be less than 5 letters';
  if (!validator.isEmail(data.email)) errors.email = 'invalid email';
  return errors;
}

onSubmit = () => {
  const { data } = this.state;
  const errors = this.validate(data);
  const { submit, history } = this.props;
  this.setState({
    errors,
  });
  if (Object.keys(errors).length === 0) {
    submit(data, history);
  }
}

render() {
  const { data, errors } = this.state;
  const { error } = this.props;
  return (
    <div>
      <main>
        {Object.keys(error).length > 0 && <Message negative>{error}</Message>}
        <Form onSubmit={this.onSubmit}>
          {FormField('text', 'email', this.onChange, data.email, 'Enter email address', 'Email:', errors.email)}
          {FormField('password', 'password', this.onChange, data.password, 'Enter your password', 'Password:', errors.password)}
          <input type="submit" value="Login" />
        </Form>
        <div className="signup">
          <h3>
            New to Maintenance Tracker?
            <Link to="/signup"> Sign Up</Link>
          </h3>
        </div>
      </main>
    </div>
  );
}
}

UserForm.defaultProps = {
  error: {},
};

UserForm.propTypes = {
  submit: PropTypes.func.isRequired,
  history: PropTypes.shape({
  }).isRequired,
  error: PropTypes.shape({}),
};

export default UserForm;
