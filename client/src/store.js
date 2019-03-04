import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


// INIT global state
const initialState = {};


// init middleware dependecies array
const middleware = [thunk];


// dev tools middleware & check if this is dev OS, or server evn
const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose


// INIT store
const store = createStore(
  rootReducer,
  initialState,
  composeSetup(
    applyMiddleware(...middleware)
  )
);


export default store;