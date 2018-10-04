import React from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { Link } from 'react-router-dom';
import store from '../store/store';
import { setUser } from '../actions/login';

const BASE_URL = 'https://mtracker-nwanna.herokuapp.com/api/v2';

export const APIPOST = (body, path) => axios.post(`${BASE_URL}${path}`, body, {
});

export const APIGET = path => axios.get(`${BASE_URL}${path}`);

export const setToken = (user) => {
  if (user) {
    localStorage.setItem('token', user.headers.authentication);
    localStorage.setItem('user', JSON.stringify(user.data.user));
    const token = localStorage.getItem('token');
    axios.defaults.headers.common.Authentication = token;
  }
};

export const logoutUser = () => localStorage.clear();

export const setCurrentUser = () => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));
  const { exp } = jwtDecode(token);
  const currentTime = Math.floor(Date.now() / 1000);
  if (exp > currentTime) {
    store.dispatch(setUser(user));
    axios.defaults.headers.common.Authentication = token;
  } else {
    logoutUser();
  }
};

export const numberOfPages = requests => Math.ceil(requests.length / 10);

const statusClass = (status) => {
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
  <li key={request.id}>
    <Link to={`/request/:${request.id}`}>
      {request.title}
      <span className={statusClass(request.status)}>{request.status}</span>
    </Link>
  </li>
);

const singleReq = (requests, i) => (
  <li>
    {requests[i].title}
    <Link to={`/request?id=${requests[i].id}`}>
      <span className={statusClass(requests[i].status)}>{requests[i].status}</span>
    </Link>
  </li>
);

export const displayButton = (requests, page, prevPage, nextPage) => (
  <div>
    {page === 1 ? <button type="button" onClick={prevPage} id="prev">PREV &laquo;</button>
      : <button type="button" onClick="nextPage()" id="next">NEXT &raquo;</button>}
    {page !== numberOfPages(requests) ? <button type="button" onClick={nextPage} id="next">NEXT &raquo;</button>
      : null
  }
  </div>
);
const changePage = (page, requests, prevPage, nextPage) => {
  if (page < 1) page = 1;
  if (page > numberOfPages(requests)) page = numberOfPages(requests);

  // row.innerHTML = "";
  const reqArray = [];
  for (let i = (page - 1) * 10; i < (page * 10) && i < requests.length; i++) {
    reqArray.push(
      <li>
        {requests[i].title}
        <Link to={`/request?id=${requests[i].id}`}>
          <span className={statusClass(requests[i].status)}>{requests[i].status}</span>
        </Link>
      </li>,
    );
  }
  return reqArray;
    //displayButton: displayButton(page, requests, prevPage, nextPage),
};


export const nextPage = (requests) => {
  let currentPage = 1;
  if (currentPage < numberOfPages(requests)) {
    currentPage += 1;
    changePage(currentPage, requests);
  }
};

export const prevPage = () => {
  let currentPage = 1;
  if (currentPage > 1) {
    currentPage -= 1;
    changePage(currentPage);
  }
};


export const renderRequests = (requests, loadNextPage, loadPrevPage) => (
  <div>
    {requests.length > 10 ? changePage(1, requests, loadNextPage, loadPrevPage)
      : (requests.map(request => displayReq(request)))}
  </div>
);

export const options = [{ key: 'urgent', value: 'urgent', text: 'urgent' },
  { key: 'normal', value: 'normal', text: 'normal' },
  { key: 'nonurgent', value: 'nonurgent', text: 'Not urgent' },
];
