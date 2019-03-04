import { combineReducers } from 'redux';
import postReducer from './postReducer';
import eventReducer from './eventReducer';

export default combineReducers({
  post: postReducer,
  training: eventReducer
});