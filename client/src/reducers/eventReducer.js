import { GET_EVENTS, CREATE_EVENT, DELETE_EVENT, EVENTS_LOADING } from '../actions/types';

const initialState = {
  events: [],
  loading: false
};


export default function (state = initialState, action) {

  switch (action.type) {

    case GET_EVENTS:
      return {
        ...state,
        events: action.payload,
        loading: false
      }

    case CREATE_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload]
      }

    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter(item => item._id !== action.payload)
      }

    case EVENTS_LOADING:
      return {
        ...state,
        loading: true
      }

    default:
      return state

  };
}