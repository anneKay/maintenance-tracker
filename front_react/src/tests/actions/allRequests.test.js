import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { getUserRequests, getSingleRequest, getAllRequests } from '../../actions/getAllRequests';
import actionTypes from '../../actions/index';

describe('Login Action', () => {
  const middleware = [thunk]; // add your middleware like `redux-thunk`
  const mockStore = configureMockStore(middleware);
  const store = mockStore({});

  const {
    GET_USER_REQUESTS_SUCCESS,
    GET_USER_REQUESTS_FAILURE,
    GET_SINGLE_REQUEST_FAILURE,
    GET_SINGLE_REQUEST_SUCCESS,
    GET_REQUESTS_SUCCESS,
    GET_REQUESTS_FAILURE,
  } = actionTypes;

  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should get all requests belonging to a single user', () => {
    const details = {
      requests: {
        title: 'A request title',
        descripiton: 'The request description',
        requestType: 'urgent',
      },
    };
    const expectedActions = {
      type: GET_USER_REQUESTS_SUCCESS,
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
    return store.dispatch(getUserRequests()).then(() => {
      expect(store.getActions()[0]).toEqual(expectedActions);
    });
  });

  it('should return error if fetching user request is unsuccesful', () => {
    const errorResponse = {
      error: {
        body: ['This request does not exist'],
      },
    };
    const expectedAction = {
      type: GET_USER_REQUESTS_FAILURE,
      payload: {
        error: {
          body: ['This request does not exist'],
        },
      },
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: errorResponse,
      });
    });

    return store.dispatch(getUserRequests()).then(() => {
      expect(store.getActions()[1]).toEqual(expectedAction);
    });
  });

  it('should get a single request belonging to a single user', () => {
    const details = {
      request: {
        title: 'A request title',
        descripiton: 'The request description',
        requestType: 'urgent',
      },
    };
    const expectedActions = {
      type: GET_SINGLE_REQUEST_SUCCESS,
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
    return store.dispatch(getSingleRequest()).then(() => {
      expect(store.getActions()[2]).toEqual(expectedActions);
    });
  });

  it('should return error if fetching user request is unsuccesful', () => {
    const errorResponse = {
      error: {
        body: ['This request does not exist'],
      },
    };
    const expectedAction = {
      type: GET_SINGLE_REQUEST_FAILURE,
      payload: {
        error: {
          body: ['This request does not exist'],
        },
      },
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: errorResponse,
      });
    });
    return store.dispatch(getSingleRequest()).then(() => {
      expect(store.getActions()[3]).toEqual(expectedAction);
    });
  });

  it('should get all requests', () => {
    const details = {
      allRequests: [{
        title: 'A request title',
        descripiton: 'The request description',
        requestType: 'urgent',
      }],
    };
    const expectedActions = {
      type: GET_REQUESTS_SUCCESS,
      payload: [{
        title: 'A request title',
        descripiton: 'The request description',
        requestType: 'urgent',
      }],
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: details,
      });
    });
    return store.dispatch(getAllRequests()).then(() => {
      expect(store.getActions()[4]).toEqual(expectedActions);
    });
  });

  it('should return error if fetching user request is unsuccesful', () => {
    const errorResponse = {
      error: {
        body: ['This request does not exist'],
      },
    };
    const expectedAction = {
      type: GET_REQUESTS_FAILURE,
      payload: {
        error: {
          body: ['This request does not exist'],
        },
      },
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: errorResponse,
      });
    });
    return store.dispatch(getAllRequests()).then(() => {
      expect(store.getActions()[5]).toEqual(expectedAction);
    });
  });
});
