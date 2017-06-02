import {
  createRouter,
} from '@expo/ex-navigation';

import About from '../scenes/About';
import Schedule from '../scenes/Schedule';
import Session from '../scenes/Session';
import Faves from '../scenes/Faves';
import NavigationLayout from './NavigationLayout';

const Router = createRouter(() => ({
  about: () => About,
  schedule: () => Schedule,
  layout: () => NavigationLayout,
  session: () => Session,
  faves: () => Faves,
}));

export default Router;