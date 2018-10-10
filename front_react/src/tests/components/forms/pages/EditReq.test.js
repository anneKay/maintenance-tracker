import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { EditRequest, mapStateToProps } from '../../../../components/pages/EditRequest';

describe('Edit Request', () => {
  const props = {
    history: {
      location: {
        pathname: '/request/4',
      },
    },
    request: {},
  };

  const sinonSpy = sinon.spy();
  const data = {
    title: 'title',
    description: 'description',
  };

  const getReqReducer = {};

  const wrapper = shallow(<EditRequest submit={sinonSpy} {...props} />);
  it('Should call the submit function', () => {
    const requestType = 'urgent';
    wrapper.instance().submit(data, requestType, props.history);
    expect(sinonSpy.calledWith()).toBe(false);
  });

  it('Should call the map state to props function', () => {
    const request = mapStateToProps({ getReqReducer });
    expect(request).toEqual({});
  });
});
