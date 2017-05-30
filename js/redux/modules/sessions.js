import { firebaseUrl } from '../../config/api';
import { formatSessionData } from '../../lib/dataFormatHelpers'

const GET_SESSION_LOADING = 'GET_SESSION_LOADING';
const GET_SESSION_ERROR = 'GET_SESSION_ERROR';
const GET_SESSION = 'GET_SESSION';

const getSessionLoading = () => ({ type: GET_SESSION_LOADING });
const getSessionError = (error) => ({ type: GET_SESSION_ERROR, payload: error });
const getSession = (codes) => ({ type: GET_SESSION, payload: codes })


export const _fetchSessions = () => (dispatch) => {
  dispatch(getSessionLoading());

  return fetch(`${firebaseUrl}/sessions.json`)
    .then(response => response.json())
    .then(session => dispatch(getSession(session)))
    .catch(error => dispatch(getSessionError(error)))
}

//REDUCER

export default function reducer(state = {
  isLoading: false,
  sessionData: {
    dataBlob: {},
    sectionIds: [],
    rowIds: []
  }
}, action) {
  switch (action.type) {
    case GET_SESSION_LOADING: {
      return Object.assign({}, state, {
        isLoading: true,
        error: ''
      })
    }
    case GET_SESSION_ERROR: {
      return Object.assign({}, state, {
        isLoading: false,
        error: action.payload
      })
    }
    case GET_SESSION: {
      let formattedSession = formatSessionData(action.payload);
      return Object.assign({}, state, {
        isLoading: false,
        error: '',
        sessionData: formattedSession
      })
    }
    default: {
      return state;
    }
  }
}