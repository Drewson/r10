import { combineReducers } from 'redux';
import { NavigationReducer } from '@expo/ex-navigation';
import ConductReducer from '../redux/modules/conduct';

export default combineReducers({
  navigation: NavigationReducer,
  conduct: ConductReducer
})
