import requestReducer from '../../reducers/createRequestReducer';
import * as mocks from '../__mocks__/mockData';

describe('sCreate request reducer', () => {
  it('should return the initial state', () => {
    expect(requestReducer(undefined, {})).toEqual(mocks.createReqInitialState);
  });
  it('should handle CREATE_REQUEST_SUCCESS', () => {
    expect(requestReducer({}, mocks.actualRequestSuccess)).toEqual(mocks.expectedRequestSuccess);
  });
  it('should handle CREATE_REQUEST_FAILURE', () => {
    expect(requestReducer({}, mocks.actualRequestFailure)).toEqual(mocks.expectedRequestFailure);
  });
});
