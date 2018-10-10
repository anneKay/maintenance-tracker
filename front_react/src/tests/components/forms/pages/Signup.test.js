import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Signup, mapStateToProps } from '../../../../components/pages/SignupPage';


describe('SIGNUP USER', () => {
  const props = {
    signupUser: jest.fn(),
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

  const wrapper = shallow(<Signup submit={sinonSpy} {...props} />);
  it('Should call the submit function', () => {
    wrapper.instance().submit(data.name, data.email, data.password, props.history);
    expect(sinonSpy.calledWith()).toBe(false);
  });

  it('Should call the map state to props function', () => {
    const error = mapStateToProps({ signupReducer });
    expect(error).toEqual({});
  });
});
