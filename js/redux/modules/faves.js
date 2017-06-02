import { queryFaves, createFave, deleteFave } from '../../config/models';
import { firebaseUrl } from '../../config/api';
import { formatSessionData } from '../../lib/dataFormatHelpers'

const ADD_FAVORITE = 'ADD_FAVORITE';
const DELETE_FAVORITE = 'DELETE_FAVORITE';
const LOADING_FAVES = 'LOADING_FAVES';
const GET_FAVES_ERROR = 'GET_FAVES_ERROR';
const GET_FAVES = 'GET_FAVES';

export const addFavorite = (faveIds) => ({ type: ADD_FAVORITE, payload: faveIds })
export const deleteFavorite = (faveIds) => ({ type: DELETE_FAVORITE, payload: faveIds })

const getFavesLoading = () => ({ type: LOADING_FAVES })
const getFavesError = (err) => ({ type: GET_FAVES_ERROR, payload: err})
const getFaves = (faves) => ({ type: GET_FAVES, payload: faves })

const faveIds = queryFaves();

export const _fetchFaves = () => (dispatch) => {
  dispatch(getFavesLoading());

  return fetch(`${firebaseUrl}/sessions.json`)
    .then(response => response.json())
    .then(sessionsInfo => dispatch(getFaves(sessionsInfo.filter( sess => faveIds.includes(sess.session_id) ))))
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
      const formattedFaves = formatSessionData(action.payload)
      return Object.assign({}, state, {
        isLoading: false,
        faveIds: faveIds,
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
    case ADD_FAVORITE: {
      createFave(action.payload)
      return Object.assign({}, state, {
        isLoading: false,
      })
    }
    case DELETE_FAVORITE: {
      deleteFave(action.payload)
      return Object.assign({}, state, {
        isLoading: false,
      })
    }
    default: {
      return state;
    }
  }
}