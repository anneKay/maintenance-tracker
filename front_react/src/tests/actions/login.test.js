import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import login from '../../actions/login';
import actionTypes from '../../actions/index';

describe('Login Action', () => {
  const middleware = [thunk]; // add your middleware like `redux-thunk`
  const mockStore = configureMockStore(middleware);
  const store = mockStore({});

  const { LOG_IN_SUCCESS, LOG_IN_FAILURE } = actionTypes;

  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());
  const history = {
    push: jest.fn(),
  };

  it('should signup user with details', () => {
    const details = {
      user: {
        data: {
          email: 'example@gmail.com',
        },
      },
    };
    const expectedActions = {
      type: LOG_IN_SUCCESS,
      payload: {
        data: {
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
    return store.dispatch(login('nwanna@nwanna.com', 'password', history)).then(() => {
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
      type: LOG_IN_FAILURE,
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

    return store.dispatch(login('jack.com', 'password', history)).then(() => {
      expect(store.getActions()[1]).toEqual(expectedAction);
    });
  });
});
