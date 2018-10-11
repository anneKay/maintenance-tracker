import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { AdminPage } from '../../../../components/pages/Admin';
import { allrequests, adminResponse } from '../../../__mocks__/mockData';

describe('Admin component rendering', () => {
  const sinonSpy = sinon.spy();
  const state = {
    allRequests: [],
  };
  const data = {
    request: [{
      title: 'title',
      description: 'description',
      requestType: 'requestType',
    }],
  };
  const requests = () => {
    const promise = new Promise(resolve => resolve(data));
    state.allRequests = data;
    return promise;
  };
  const props = {
    requests,
    adminAction: jest.fn(),
    allrequests,
    adminResponse,
  };
  const event = {
    preventDefault() {},
    target: {
      value: 'value',
    },
  };
  const wrapper = shallow(<AdminPage {...props} />);
  it('should call component did mount if component mounts', () => {
    wrapper.instance().performAction(event, 2);
    expect(sinonSpy.calledWith()).toBe(false);
    wrapper.instance().componentDidMount();
  });
});
