import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Profile, mapStateToProps } from '../../../../components/pages/Profile';
import { requests, userDetail } from '../../../__mocks__/mockData';
import { statusClass } from '../../../../helpers/helper';

describe('Profile component rendering', () => {
  const sinonSpy = sinon.spy();
  const props = {
    user: userDetail,
    requests,
    getReq: jest.fn(),
  };
  const signupReducer = {
  };
  const wrapper = shallow(<Profile {...props} />);
  it('should call component did mount if component mounts', () => {
    expect(sinonSpy.calledWith()).toBe(false);
    wrapper.instance().componentDidMount();
  });
  it('Should call the map state to props function', () => {
    const { user } = mapStateToProps({ signupReducer });
    expect(user).toEqual({});
  });
  it('Should call the status class function', () => {
    expect(statusClass('pending')).toEqual('pull-right progress');
    expect(statusClass('rejected')).toEqual('pull-right rejected');
    expect(statusClass('approved')).toEqual('pull-right accepted');
    expect(statusClass('none')).toEqual('pull-right progress');
  });
});
