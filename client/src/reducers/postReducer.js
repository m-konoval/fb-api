import { GET_POSTS, CREATE_POST, DELETE_POST, POSTS_LOADING } from '../actions/types';

const initialState = {
  posts: [],
  loading: false
};


export default function (state = initialState, action) {

  switch (action.type) {

    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      }

    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      }

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(item => item._id !== action.payload)
      }

    case POSTS_LOADING:
      return {
        ...state,
        loading: true
      }

    default:
      return state

  };
}