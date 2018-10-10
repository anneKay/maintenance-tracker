import adminReducer from '../../reducers/admin';
import * as mocks from '../__mocks__/mockData';

describe('admin reducer', () => {
  it('should return the initial state', () => {
    expect(adminReducer(undefined, {})).toEqual(mocks.adminInitialState);
  });
  it('should handle ADMIN_SUCCESS', () => {
    expect(adminReducer({}, mocks.actualAdminSuccess)).toEqual(mocks.expectedAdminSuccess);
  });
  it('should handle ADMIN_FAILURE', () => {
    expect(adminReducer({}, mocks.actualAdminFailure)).toEqual(mocks.expectedAdminFailure);
  });
});
