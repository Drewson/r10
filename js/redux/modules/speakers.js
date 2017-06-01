import { firebaseUrl } from '../../config/api';
import { formatDataObject } from '../../lib/dataFormatHelpers'

const GET_SPEAKER_LOADING = 'GET_SPEAKER_LOADING';
const GET_SPEAKER_ERROR = 'GET_SPEAKER_ERROR';
const GET_SPEAKER = 'GET_SPEAKER';

const getSpeakerLoading = () => ({ type: GET_SPEAKER_LOADING });
const getSpeakerError = (error) => ({ type: GET_SPEAKER_ERROR, payload: error });
const getSpeaker = (speakerInfo) => ({ type: GET_SPEAKER, payload: speakerInfo })


export const _fetchSpeakers = (speakerId) => (dispatch) => {
  dispatch(getSpeakerLoading());

  return fetch(`${firebaseUrl}/speakers.json?orderBy="speaker_id"&equalTo="${speakerId}"`)
    .then(response => response.json())
    .then(speakerInfo => dispatch(getSpeaker(speakerInfo)))
    .catch(error => dispatch(getSpeakerError(error)))
}

//REDUCER

export default function reducer(state = {
  isLoading: false,
  speakerInfo: {
    bio: '',
    image: '',
    name: '',
    session: '',
    speaker_id: '',
    url: ''
  },
}, action) {
  switch (action.type) {
    case GET_SPEAKER_LOADING: {
      return Object.assign({}, state, {
        isLoading: true,
        error: ''
      })
    }
    case GET_SPEAKER_ERROR: {
      return Object.assign({}, state, {
        isLoading: false,
        error: action.payload
      })
    }
    case GET_SPEAKER: {
      const formattedSpeaker = formatDataObject(action.payload)
      return Object.assign({}, state, {
        isLoading: false,
        error: '',
        speakerInfo: formattedSpeaker
      })
    }
    default: {
      return state;
    }
  }
}