import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { CreateForm } from '../../../components/form/CreateForm';

describe(' Login Form component rendering', () => {
  const state = {
    loading: false,
    data: {
      title: '',
      description: '',
    },
    requestType: '',
    errors: {},
  };
  const sinonSpy = sinon.spy();
  const wrapper = shallow(<CreateForm
    state={state}
    validate={sinonSpy}
    onSubmit={sinonSpy}
    onChange={sinonSpy}
  />);

  it('Should render properly', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call the submit method on submit', () => {
    wrapper.find('Form').simulate('submit', { preventDefault() { } });
    expect(sinonSpy.called).toBe(true);
  });
});
