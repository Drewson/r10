import { combineReducers } from 'redux';
import { NavigationReducer } from '@expo/ex-navigation';
import ConductReducer from '../redux/modules/conduct';
import SessionReducer from '../redux/modules/sessions';

export default combineReducers({
  navigation: NavigationReducer,
  conduct: ConductReducer,
  sessions: SessionReducer
})
