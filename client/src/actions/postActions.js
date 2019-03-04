import { GET_POSTS, CREATE_POST, DELETE_POST, POSTS_LOADING } from './types';
import axios from 'axios';

const API_url = '/api/posts';

// @route   GET api/posts
export const getPosts = () => dispath => {
  dispath(setPostsLoading());

  axios
    .get(API_url)
    .then(res =>
      dispath({
        type: GET_POSTS,
        payload: res.data
      })
    )
}; // getPosts


// @route   POST api/posts
export const createPost = newPost => dispath => {
  axios
    .post(API_url, newPost)
    .then(res =>
      dispath({
        type: CREATE_POST,
        payload: res.data
      })
    );
}; // createPost


// @route   DELETE api/posts/${id}
export const deletePost = id => dispath => {

  axios
    .delete(`${API_url}/${id}`)
    .then(res =>
      dispath({
        type: DELETE_POST,
        payload: id
      })
    );
}; // deletePost


// @desc    change loading status
export const setPostsLoading = () => {
  return {
    type: POSTS_LOADING
  };
}; // setPostsLoading