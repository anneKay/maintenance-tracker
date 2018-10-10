import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import signup from '../../actions/signup';
import actionTypes from '../../actions/index';

describe('Login Action', () => {
  const middleware = [thunk]; // add your middleware like `redux-thunk`
  const mockStore = configureMockStore(middleware);
  const store = mockStore({});

  const { SIGN_UP_SUCCESS, SIGN_UP_FAILURE } = actionTypes;

  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());
  const history = {
    push: jest.fn(),
  };

  it('should signup user with details', () => {
    const details = {
      user: {
        data: {
          name: 'Nwanna',
          email: 'example@gmail.com',
        },
      },
    };
    const expectedActions = {
      type: SIGN_UP_SUCCESS,
      payload: {
        data: {
          name: 'Nwanna',
          email: 'example@gmail.com',
        },
      },
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: details,
      });
    });
    return store.dispatch(signup('Nwanna', 'nwanna@nwanna.com', 'password', history)).then(() => {
      expect(store.getActions()[0]).toEqual(expectedActions);
    });
  });

  it('should return error if login is unsuccessful', () => {
    const errorResponse = {
      error: {
        body: ['email or password incorrect'],
      },
    };
    const expectedAction = {
      type: SIGN_UP_FAILURE,
      payload: {
        error: {
          body: ['email or password incorrect'],
        },
      },
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 401,
        response: errorResponse,
      });
    });

    return store.dispatch(signup('Nwanna', 'jack.com', 'password', history)).then(() => {
      expect(store.getActions()[1]).toEqual(expectedAction);
    });
  });
});
