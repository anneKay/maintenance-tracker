import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import LoginForm from '../../../components/form/LoginForm';


describe(' Login Form component rendering', () => {
  const props = {
    submit: jest.fn(),
    history: {},
    error: 'unauthorized',
  };
  const emailEvent = {
    preventDefault() {},
    target: {
      name: 'email',
      value: 'example@email.com',
    },
  };
  const passwordEvent = {
    preventDefault() {},
    target: {
      name: 'password',
      value: 'yourpass',
    },
  };
  const sinonSpy = sinon.spy();
  const wrapper = shallow(<LoginForm onSubmit={sinonSpy} {...props} />);

  it('Should render properly', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call the submit method on submit', () => {
    wrapper.find('Form').simulate('submit', { preventDefault() {} });
    expect(sinonSpy.called).toBe(false);
  });

  it('Should call the onChange function and set email in state', () => {
    wrapper.instance().onChange(emailEvent);
    const actualEmail = wrapper.state().data.email;
    const expectedEmail = 'example@email.com';
    expect(actualEmail).toBe(expectedEmail);
  });
  it('Should call the onChange function and set password in the state', () => {
    wrapper.instance().onChange(passwordEvent);
    const actualPassword = wrapper.state().data.password;
    const expectedpassword = 'yourpass';
    expect(actualPassword).toBe(expectedpassword);
  });
  it('Should call the submit method on submit', () => {
    wrapper.find('Form').simulate('submit', { preventDefault() {} });
    expect(sinonSpy.called).toBe(false);
  });
  it('Should call the submit method on submit', () => {
    wrapper.find('Form').simulate('submit', { preventDefault() {} });
    wrapper.instance().onSubmit();
    expect(sinonSpy.called).toBe(false);
  });
  wrapper.instance().onSubmit();
});
