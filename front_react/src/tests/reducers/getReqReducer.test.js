import getRequestReducer from '../../reducers/getRequestReducer';
import * as mocks from '../__mocks__/mockData';

describe('GET request reducer', () => {
  it('should return the initial state', () => {
    expect(getRequestReducer(undefined, {})).toEqual(mocks.getReqInitialState);
  });
  it('should handle GET_USER_REQUEST_SUCCESS', () => {
    expect(getRequestReducer({}, mocks.actualUserReqSuccess)).toEqual(mocks.expectedUserReqSuccess);
  });
  it('should handle GET_REQUEST_FAILURE', () => {
    expect(getRequestReducer({}, mocks.actualUserReqFailure)).toEqual(mocks.expectedUserReqFailure);
  });
  it('should handle GET_SINGLE_REQUEST_SUCCESS', () => {
    expect(getRequestReducer({}, mocks.actualSingleSuccess)).toEqual(mocks.expectedSingleSuccess);
  });
  it('should handle GET_SINGLE_REQUEST_FAILURE', () => {
    expect(getRequestReducer({}, mocks.actualSingleFailure)).toEqual(mocks.expectedSingleFailure);
  });
  it('should handle GET_ALL_REQUEST_SUCCESS', () => {
    expect(getRequestReducer({}, mocks.actualAllReqSuccess)).toEqual(mocks.expectedAllReqSuccess);
  });
  it('should handle GET_ALL_REQUEST_FAILURE', () => {
    expect(getRequestReducer({}, mocks.actualAllReqFailure)).toEqual(mocks.expectedAllReqFailure);
  });
});
