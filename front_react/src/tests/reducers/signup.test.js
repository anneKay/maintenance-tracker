import signupReducer from '../../reducers/signupReducer';

describe('it should setup default signup values', () => {
  const state = signupReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    user: []
  })
})