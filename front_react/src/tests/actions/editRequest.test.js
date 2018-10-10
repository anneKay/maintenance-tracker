import editRequest from '../../actions/editRequest';

describe('Edit Request Action', () => {
  const history = {
    push: jest.fn(),
  };
  const promise = new Promise(resolve => resolve({}));
  it('should return request if edit is successful', () => {
    expect(editRequest('title', 'description', 'requestType', 'requestId', history)).toEqual(promise);
  });
});
