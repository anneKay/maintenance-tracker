import axios from 'axios';
import actionTypes from './index';
import history from '../history';
import { APIPOST, setToken } from '../helpers/helper';

const { LOG_IN_FAILURE, LOG_IN_SUCESS } = actionTypes;

// export default (email, password) => dispatch => axios.post('https://mtracker-nwanna.herokuapp.com/api/v2/auth/login', {
//   email,
//   password,
// })
//   .then((user) => {
//     console.log('>>>>>>>', user);
//     if (user.data) localStorage.setItem('name', user.data.name);
//     dispatch({
//       type: LOG_IN_SUCESS,
//       payload: user.data.user,
//     });
//     history.push('/profile');
//   })

//   .catch(error => dispatch({
//     type: LOG_IN_FAILURE,
//     payload: error.response.data,
//   }));

export default (email, password, res) => dispatch => APIPOST({ email, password }, '/auth/login')
  .then((user) => {
    console.log('>>>>>>>>>>.', res.headers.get('authentication'));
    console.log('>>>>>>>>user', user);
    if (user.data) {
      localStorage.setItem('name', user.data.user.name);
    }
    dispatch({
      type: LOG_IN_SUCESS,
      payload: user.data.user,
    });
    history.push('/profile');
  })
  .catch(error => {
    console.log('>>>>>', error);
    dispatch({
    type: LOG_IN_FAILURE,
    payload: error.response,
  })
  });
