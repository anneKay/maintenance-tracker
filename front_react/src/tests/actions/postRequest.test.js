import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import postRequest from '../../actions/postRequest';
import actionTypes from '../../actions/index';

describe('Post Request Action', () => {
  const middleware = [thunk]; // add your middleware like `redux-thunk`
  const mockStore = configureMockStore(middleware);
  const store = mockStore({});

  const { CREATE_REQUEST_SUCCESS, CREATE_REQUEST_FAILURE } = actionTypes;

  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());
  const history = {
    push: jest.fn(),
  };

  it('should signup user with details', () => {
    const details = {
      request: {
        title: 'A request title',
        descripiton: 'The request description',
        requestType: 'urgent',
      },
    };
    const expectedActions = {
      type: CREATE_REQUEST_SUCCESS,
      payload: {
        title: 'A request title',
        descripiton: 'The request description',
        requestType: 'urgent',
      },
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: details,
      });
    });
    return store.dispatch(postRequest('A request title', 'The request description', 'urgent', history)).then(() => {
      expect(store.getActions()[0]).toEqual(expectedActions);
    });
  });

  it('should return error if create request is unsuccessful', () => {
    const errorResponse = {
      error: {
        body: ['Request body cannot be empty'],
      },
    };
    const expectedAction = {
      type: CREATE_REQUEST_FAILURE,
      payload: {
        error: {
          body: ['Request body cannot be empty'],
        },
      },
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: errorResponse,
      });
    });

    return store.dispatch(postRequest('A request title', '', 'urgent', history)).then(() => {
      expect(store.getActions()[1]).toEqual(expectedAction);
    });
  });
});
