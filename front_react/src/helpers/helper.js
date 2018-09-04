import axios from 'axios';

const BASE_URL = 'https://mtracker-nwanna.herokuapp.com/api/v2';
const token = localStorage.getItem('token');

export const APIPOST = (body, path) => axios.post(`${BASE_URL}/${path}`, body, {
  headers: {
    authentication: token,
  },
});

export const setToken = (res, user) => {
  console.log('>>>>>>>>>>token', res.headers.get('authentication'));
  if (res.status === 200 || res.status === 201) {
    localStorage.setItem('token', res.headers.get('authentication'));
    localStorage.setItem('name', user.data.user.name);
  }
};
