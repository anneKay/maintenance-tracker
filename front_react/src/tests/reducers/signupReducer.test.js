import signupReducer from '../../reducers/signupReducer';
import * as mocks from '../__mocks__/mockData';

describe('signup reducer', () => {
  it('should return the initial state', () => {
    expect(signupReducer(undefined, {})).toEqual(mocks.signupInitialState);
  });
  it('should handle SIGN_UP_SUCCESS', () => {
    expect(signupReducer({}, mocks.actualSignupSuccess)).toEqual(mocks.expectedSignupSuccess);
  });
  it('should handle SIGN_UP_FAILURE', () => {
    expect(signupReducer({}, mocks.actualSignupFailure)).toEqual(mocks.expectedSignupFailure);
  });
  it('should handle LOG_IN_SUCCESS', () => {
    expect(signupReducer({}, mocks.actualLoginSuccess)).toEqual(mocks.expectedLoginSuccess);
  });
  it('should handle LOG_IN_FAILURE', () => {
    expect(signupReducer({}, mocks.actualLoginFailure)).toEqual(mocks.expectedLoginFailure);
  });
});
