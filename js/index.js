import React, { Component } from 'react';
import { StatusBar } from 'react-native'
import {
  createRouter,
  NavigationContext,
  NavigationProvider,
  StackNavigation,
  NavigationStyles,
} from '@expo/ex-navigation';
import Router from './navigation/router';
import { Provider } from 'react-redux';
import Store from './redux/store';

const navigationContext = new NavigationContext({
  router: Router,
  store: Store,
})

export default class R10 extends Component {
  render() {
    return (
      <Provider store={Store} >
        <NavigationProvider context={navigationContext}>
          <StatusBar barStyle="light-content" />
          <StackNavigation
            id='root'
            navigatorUID='root'
            initialRoute={Router.getRoute('layout')}
          />
        </NavigationProvider>
      </Provider>
    );
  }
}

