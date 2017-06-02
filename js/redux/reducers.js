import { combineReducers } from 'redux';
import { NavigationReducer } from '@expo/ex-navigation';
import ConductReducer from '../redux/modules/conduct';
import SessionReducer from '../redux/modules/sessions';
import SpeakersReducer from '../redux/modules/speakers';
import FavesReducer from '../redux/modules/faves';

export default combineReducers({
  navigation: NavigationReducer,
  conduct: ConductReducer,
  sessions: SessionReducer,
  speakers: SpeakersReducer,
  faves: FavesReducer,
})
