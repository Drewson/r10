import {
  createRouter,
} from '@expo/ex-navigation';

import About from '../scenes/About';
import Schedule from '../scenes/Schedule';
import Session from '../scenes/Session';
import NavigationLayout from './NavigationLayout';

const Router = createRouter(() => ({
  about: () => About,
  schedule: () => Schedule,
  layout: () => NavigationLayout,
  session: () => Session,
}));

export default Router;