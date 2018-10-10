import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { LoginPage, mapStateToProps } from '../../../../components/pages/LoginPage';


describe('Login USER', () => {
  const props = {
    login: jest.fn(),
    history: {},
  };

  const sinonSpy = sinon.spy();
  const data = {
    name: 'Nwanna',
    email: 'Nwanna@nwanna.com',
    password: 'mypassword',
  };

  const signupReducer = {
    error: {},
  };

  const wrapper = shallow(<LoginPage submit={sinonSpy} {...props} />);
  it('Should call the submit function', () => {
    wrapper.instance().submit(data.name, data.email, data.password, props.history);
    expect(sinonSpy.calledWith()).toBe(false);
  });

  it('Should call the map state to props function', () => {
    const error = mapStateToProps({ signupReducer });
    expect(error).toEqual({});
  });
});
