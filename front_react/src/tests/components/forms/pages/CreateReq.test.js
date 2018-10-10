import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { CreateReq, mapStateToProps } from '../../../../components/pages/CreateReq';

describe('CREATE FORM', () => {
  const props = {
    createReqAction: jest.fn(),
    history: {},
  };

  const sinonSpy = sinon.spy();
  const data = {
    title: 'title',
    description: 'description',
  };

  const createReqReducer = {
    request: {},
  };

  const wrapper = shallow(<CreateReq submit={sinonSpy} {...props} />);
  it('Should call the submit function', () => {
    const requestType = 'urgent';
    wrapper.instance().submit(data.title, data.description, requestType, props.history);
    expect(sinonSpy.calledWith()).toBe(false);
  });

  it('Should call the map state to props function', () => {
    const request = mapStateToProps({ createReqReducer });
    expect(request).toEqual({});
  });
});
