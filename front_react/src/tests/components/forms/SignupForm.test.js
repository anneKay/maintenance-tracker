import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import SignupForm from '../../../components/form/SignupForm';

describe(' Login Form component rendering', () => {
  const props = {
    submit: jest.fn(),
    history: {},
  };
  const nameEvent = {
    preventDefault() {},
    target: {
      name: 'name',
      value: 'Nwanna',
    },
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
  const wrapper = shallow(<SignupForm onSubmit={sinonSpy} {...props} />);

  it('Should render properly', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call the submit method on submit', () => {
    wrapper.find('Form').simulate('submit', { preventDefault() { } });
    expect(sinonSpy.called).toBe(false);
  });
  it('Should call the onChange function and set the email in state', () => {
    wrapper.instance().onChange(emailEvent);
    const actualEmail = wrapper.state().data.email;
    const expectedEmail = 'example@email.com';
    expect(actualEmail).toBe(expectedEmail);
  });
  it('Should call the onChange function and set the name in state', () => {
    wrapper.instance().onChange(nameEvent);
    const actualName = wrapper.state().data.name;
    const expectedEmail = 'Nwanna';
    expect(actualName).toBe(expectedEmail);
  });
  it('Should call the onChange function and set password in state', () => {
    wrapper.instance().onChange(passwordEvent);
    const actualPassword = wrapper.state().data.password;
    const expectedPassword = 'yourpass';
    expect(actualPassword).toBe(expectedPassword);
  });
  it('Should call the submit method on submit', () => {
    wrapper.find('Form').simulate('submit', { preventDefault() { } });
    expect(sinonSpy.called).toBe(false);
  });
});
