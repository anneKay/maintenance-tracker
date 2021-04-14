import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';
import { Link } from 'react-router-dom';
import store from '../store/store';
import { setUser } from '../actions/login';
import history from '../history';

const BASE_URL = '/api/v2';

export const APIPOST = (body, path) => axios.post(`${BASE_URL}${path}`, body, {
});

export const APIGET = path => axios.get(`${BASE_URL}${path}`);

export const APIPUT = (body, path) => axios.put(`${BASE_URL}${path}`, body, {});

export const APIDELETE = path => axios.delete(`${BASE_URL}${path}`);

export const ReqDiv = ({ reqText, text }) => (
  <div className="user-div">
    <h2>{text}</h2>
    <h3>
      {reqText}
    </h3>
  </div>
);

export const firstButtonText = (request) => {
  let buttonText;
  if (request.status === 'pending') {
    buttonText = 'approve';
  } else if (request.status === 'approved' || request.status === 'disapproved') {
    buttonText = 'reset';
  } else {
    buttonText = 'approve';
  }
  return buttonText;
};

export const secButtonText = (request) => {
  let buttonText;
  if (request.status === 'pending') {
    buttonText = 'disapprove';
  } else if (request.status === 'approved' || request.status === 'disapproved') {
    buttonText = 'resolve';
  } else {
    buttonText = 'disapprove';
  }
  return buttonText;
};

export const setToken = (user) => {
  if (user && user.headers) {
    localStorage.setItem('token', user.headers.authorization);
    localStorage.setItem('user', JSON.stringify(user.data.user));
    const token = localStorage.getItem('token');
    axios.defaults.headers.common.Authentication = token;
  }
};

export const logoutUser = (browserHistory) => {
  browserHistory.push('/login');
  localStorage.clear();
};

export const setCurrentUser = () => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));
  if (token || token !== 'undefined') {
    try {
      const { exp } = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);
      if (exp > currentTime) {
        store.dispatch(setUser(user));
        axios.defaults.headers.common.Authentication = token;
      } else {
        logoutUser();
      }
    } catch (error) {
      history.push('/login');
    }
  } else {
    history.push('/');
  }
};

export const statusClass = (status) => {
  let className;
  switch (status) {
    case 'pending':
      className = 'pull-right progress';
      return className;
    case 'rejected':
      className = 'pull-right rejected';
      return className;
    case 'approved':
      className = 'pull-right accepted';
      return className;
    default:
      className = 'pull-right progress';
      return className;
  }
};

export const displayReq = request => (
  <Link key={request.id} to={`/request/${request.id}`}>
    <li>
      {request.title}
      <span className={statusClass(request.status)}>{request.status}</span>
    </li>
  </Link>
);


export const options = [{ key: 'urgent', value: 'urgent', text: 'urgent' },
  { key: 'normal', value: 'normal', text: 'normal' },
  { key: 'nonurgent', value: 'nonurgent', text: 'Not urgent' },
];

ReqDiv.propTypes = {
  reqText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
