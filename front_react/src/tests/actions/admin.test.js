import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import adminAction from '../../actions/adminActions';
import actionTypes from '../../actions/index';
import { firstButtonText, secButtonText } from '../../helpers/helper';

describe('Admin Action', () => {
  const middleware = [thunk]; // add your middleware like `redux-thunk`
  const mockStore = configureMockStore(middleware);
  const store = mockStore({});

  const { ADMIN_ACTION_FAILURE, ADMIN_ACTION_SUCCESS } = actionTypes;

  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should return successful message if request is approved', () => {
    const details = {
      message: {
        message: 'This request has been successfuly approved',
      },
    };
    const expectedActions = {
      type: ADMIN_ACTION_SUCCESS,
      payload: {
        message: 'This request has been successfuly approved',
      },
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: details,
      });
    });
    return store.dispatch(adminAction(3, 'disapprove')).then(() => {
      expect(store.getActions()[0]).toEqual(expectedActions);
    });
  });

  it('should return error if approve unsuccessful', () => {
    const errorResponse = {
      error: ['request does not exist'],
    };
    const expectedAction = {
      type: ADMIN_ACTION_FAILURE,
      payload: {
        error: ['request does not exist'],
      },
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: errorResponse,
      });
    });

    return store.dispatch(adminAction('0', 'approve')).then(() => {
      expect(store.getActions()[1]).toEqual(expectedAction);
    });
  });
  it('should return the right text for button', () => {
    const firstRequest = {
      status: 'pending',
    };
    const secondRequest = {
      status: 'approved',
    };
    expect(firstButtonText(firstRequest)).toEqual('approve');
    expect(firstButtonText(secondRequest)).toEqual('reset');
    expect(firstButtonText('status')).toEqual('approve');
    expect(secButtonText(firstRequest)).toEqual('disapprove');
    expect(secButtonText(secondRequest)).toEqual('resolve');
    expect(secButtonText('status')).toEqual('disapprove');
  });
});
