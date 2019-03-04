import { GET_EVENTS, CREATE_EVENT, DELETE_EVENT, EVENTS_LOADING } from './types';
import axios from 'axios';

const API_url = '/api/events';

// @route   GET api/events
export const getEvents = () => dispath => {
  dispath(setEventsLoading());

  axios
    .get(API_url)
    .then(res =>
      dispath({
        type: GET_EVENTS,
        payload: res.data
      })
    )
}; // getEvents


// @route   POST api/events
export const createEvent = newEvent => dispath => {
  axios
    .post(API_url, newEvent)
    .then(res =>
      dispath({
        type: CREATE_EVENT,
        payload: res.data
      })
    );
}; // createEvent


// @route   DELETE api/events/${id}
export const deleteEvent = id => dispath => {

  axios
    .delete(`${API_url}/${id}`)
    .then(res =>
      dispath({
        type: DELETE_EVENT,
        payload: id
      })
    );
}; // deleteEvent


// @func    LOADING
export const setEventsLoading = () => {
  return {
    type: EVENTS_LOADING
  };
}; // setEventsLoading