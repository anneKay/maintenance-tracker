import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts => {
       return dispatch({
        type: FETCH_POSTS,
        payload: posts,
      })
    });
  
}
