import SIGN_UP from './index';

export default (name, email, password) => dispatch => fetch('https://mtracker-nwanna.herokuapp.com/api/v2/auth/signup', {
  method: 'POST',
  headers: new Headers({
    Accept: 'application/json, text/plain, */*',
    'Content-type': 'application/json',
  }),
  body: JSON.stringify({ name, email, password }),

})
  .then(res => res.json())
  .then((user) => {
    console.log('>>>>>>>>>>user', user);
    if (user.user) { localStorage.setItem('name', user.user.name); }
    dispatch({
      type: SIGN_UP,
      payload: user.user,
    });
  })
  .catch();
