import signup from '../../actions/signup';

describe('should setup signup user test', () => {
  const action = signup('name', 'email', 'password');
  expect(action).toEqual({
    type: SIGNU_UP,
    payload: 
  })
})