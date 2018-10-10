import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import CreateHOC from '../../../components/form/CreateReqHOC';
import { CreateForm } from '../../../components/form/CreateForm';


describe('Modal HOC', () => {
  const spy = sinon.spy();
  const HOC = CreateHOC(CreateForm);
  const event = {
    preventDefault() {},
    target: {
      title: 'Broken pipe',
      description: 'The pipe got broken',
      requestType: 'urgent',
    },
  };
  const props = {
    submit: jest.fn(),
    result: 'result',
  };
  const dropDown = {
    value: 'urgent',
  };

  const wrapper = shallow(<HOC onSubmit={spy} {...props} />);
  it('Should call the handle submit function', () => {
    wrapper.instance().onSubmit(event);
    expect(spy.calledWith()).toBe(false);
  });

  it('Should call the on submit function and set the state', () => {
    wrapper.instance().onChange(event, dropDown);
    const actual = wrapper.state().data.title;
    const expected = '';
    expect(actual).toBe(expected);
  });
  it('Should set state with errors if any error', () => {
    const data = {
      title: '',
      description: '',
    };
    const requestType = '';
    const actual = wrapper.instance().validate(data, requestType);
    const expected = {
      title: 'Add a valid title',
      description: 'Description should not be less than 8 characters',
      requestType: 'Please select a request type',
    };
    expect(actual).toEqual(expected);
  });
});
