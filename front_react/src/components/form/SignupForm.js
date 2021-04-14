import React from 'react';
import { Form, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import validator from 'validator';
import PropTypes from 'prop-types';
import FormField from './InputFormField';

class SignupForm extends React.Component {
    state = {
      loading: false,
      data: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
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
  });
}

validate = (data) => {
  const errors = {};
  if (!data.name || data.name.length <= 2) errors.name = 'invalid name';
  if (!data.password) errors.password = 'password cannot be blank';
  if (!validator.isEmail(data.email)) errors.email = 'invalid email';
  if (data.password !== data.confirmPassword) errors.confirmPassword = 'your passwords do not match';
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
        {error && <Message negative>{error}</Message>}
        <Form onSubmit={this.onSubmit}>
          {FormField('text', 'name', this.onChange, data.name, 'Full name', 'Name', errors.name)}
          {FormField('text', 'email', this.onChange, data.email, 'Enter email address', 'Email:', errors.email)}
          {FormField('password', 'password', this.onChange, data.password, 'Enter your password', 'Password:', errors.password)}
          {FormField('password', 'confirmPassword', this.onChange, data.confirmPassword, 'Enter password again', 'Confirm Password:', errors.confirmPassword)}
          <input type="submit" value="Submit" />
        </Form>
        <div className="login">
          <h3>
            Already a User?
            <Link to="/login"> Login</Link>
          </h3>
        </div>
      </main>
    </div>
  );
}
}

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired,
  history: PropTypes.shape({
  }).isRequired,
};

export default SignupForm;
