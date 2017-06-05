import { queryFaves } from '../../config/models';
import { firebaseUrl } from '../../config/api';
import { formatSessionData } from '../../lib/dataFormatHelpers'

const LOADING_FAVES = 'LOADING_FAVES';
const GET_FAVES_ERROR = 'GET_FAVES_ERROR';
const GET_FAVES = 'GET_FAVES';

const getFavesLoading = () => ({ type: LOADING_FAVES })
const getFavesError = (err) => ({ type: GET_FAVES_ERROR, payload: err})
const getFaves = (faves, faveIds) => ({ type: GET_FAVES, payload: { faves: faves, faveIds: faveIds } })

export const _fetchFaves = () => (dispatch) => {
  dispatch(getFavesLoading());
  const faveIds = queryFaves();

  return fetch(`${firebaseUrl}/sessions.json`)
    .then(response => response.json())
    .then(sessionsInfo => dispatch(getFaves(sessionsInfo.filter( sess => faveIds.includes(sess.session_id) ), faveIds)))
    .catch(error => dispatch(getFavesError(error)))
}


export default function reducer(state = {
  isLoading: false,
  favesData: {
    dataBlob: {},
    sectionIds: [],
    rowIds: []
  }
}, action) {
  switch (action.type) {
    case GET_FAVES: {
      const formattedFaves = formatSessionData(action.payload.faves)
      return Object.assign({}, state, {
        isLoading: false,
        faveIds: action.payload.faveIds,
        favesData: formattedFaves
      })
    }
    case GET_FAVES_ERROR: {
      return Object.assign({}, state, {
        isLoading: false,
        error: action.payload
      })
    }
    case LOADING_FAVES: {
      return Object.assign({}, state, {
        isLoading: true,
        error: ''
      })
    }
    default: {
      return state;
    }
  }
}