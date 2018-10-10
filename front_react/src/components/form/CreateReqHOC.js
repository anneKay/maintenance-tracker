import React, { Component } from 'react';

const sendRequest = (WrappedComponent) => {
  class HOC extends Component {
    state = {
      loading: false,
      data: {
        title: '',
        description: '',
      },
      requestType: '',
      errors: {},
    };

    onChange = (event, dropdown) => {
      const { data } = this.state;
      this.setState({
        errors: {},
        data: {
          ...data,
          [event.target.name]: event.target.value,
        },
      });
      if (dropdown) {
        this.setState({
          requestType: dropdown.value,
        });
      }
    }

validate = (data, requestType) => {
  const errors = {};
  if (data.title.trim().length <= 4) errors.title = 'Add a valid title';
  if (data.description.trim().length <= 10) errors.description = 'Description should not be less than 8 characters';
  if (requestType.trim().length === 0) errors.requestType = 'Please select a request type';
  return errors;
}

onSubmit = () => {
  const { submit, history } = this.props;
  const { data, requestType } = this.state;
  const errors = this.validate(data, requestType);
  this.setState({
    errors,
  });
  if (Object.keys(errors).length === 0) {
    submit(data, requestType, history);
  }
}

render() {
  return (
    <WrappedComponent
      onChange={this.onChange}
      validate={this.validate}
      onSubmit={this.onSubmit}
      state={this.state}
      {...this.props}
    />
  );
}
  }
  return HOC;
};
export default sendRequest;
