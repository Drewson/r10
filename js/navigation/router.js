import {
  createRouter,
} from '@expo/ex-navigation';

import About from '../scenes/About';
import Schedule from '../scenes/Schedule/ScheduleContainer';
import NavigationLayout from './NavigationLayout';

const Router = createRouter(() => ({
  about: () => About,
  schedule: () => Schedule,
  layout: () => NavigationLayout
}));

export default Router;