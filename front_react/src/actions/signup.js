import actionTypes from './index';
import history from '../history';
import { APIPOST } from '../helpers/helper';

const { SIGN_UP_SUCCESS, SIGN_UP_FAILURE } = actionTypes;

// export default (name, email, password) => dispatch => axios.post('https://mtracker-nwanna.herokuapp.com/api/v2/auth/signup', {
//   name,
//   email,
//   password,
// })
//   .then((user) => {
//     if (user.data) localStorage.setItem('name', user.data.name);
//     dispatch({
//       type: SIGN_UP_SUCCESS,
//       payload: user.data.user,
//     });
//     history.push('/profile');
//   })

//   .catch(error => dispatch({
//     type: SIGN_UP_FAILURE,
//     payload: error.response.data,
//   }));


export default (name, email, password) => dispatch => APIPOST({ name, email, password }, '/auth/signup')
  .then((user) => {
    console.log(user);
    if (user.data) localStorage.setItem('name', user.data.name);
    dispatch({
      type: SIGN_UP_SUCCESS,
      payload: user.data.user,
    });
    history.push('/profile');
  })

  .catch(error => dispatch({
    type: SIGN_UP_FAILURE,
    payload: error.response.data,
  }));
