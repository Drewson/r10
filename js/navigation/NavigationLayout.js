//BUild tab navigator
import React, { Component } from 'react';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation';
import Router from './router';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, typography } from '../config/styles'
import {Text} from 'react-native';

const defaultRouteConfig = {
  navigationBar:{
    tintColor: colors.white,
    titleStyle: {
      fontFamily: typography.fontMain
    },
    backgroundColor: colors.red,
    // renderBackground: () => (
    //   //return linear gradient component package stuff
    // )
  }
}

class NavigationLayout extends Component {

  static route = {
    navigationBar: {
      visible: false,
    }
  }

  render() {
    return (
      <TabNavigation
        initialTab="about"
        tabBarColor={colors.black}
      >

        <TabItem
          id="schedule"
          title="Schedule"
          renderIcon={isSelected => this.renderIcon('ios-calendar', isSelected)}
          renderTitle={this.renderTitle}
        >
          <StackNavigation
            initialRoute={Router.getRoute('schedule')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>

        <TabItem
          id="about"
          title="about"
          renderIcon={isSelected => this.renderIcon('ios-information-circle', isSelected)}
          renderTitle={this.renderTitle}
        >
          <StackNavigation
            id="about"
            initialRoute={Router.getRoute('about')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>
      </TabNavigation>
    );
  }

  renderIcon(iconName, isSelected){
    return <Icon name={iconName} size={24} color={ isSelected ? colors.white : colors.mediumGrey} />
  }

  renderTitle(isSelected, title) {
    const titleStyle = {
      color: isSelected ? colors.white : colors.mediumGrey,
      fontSize: 12,
      fontFamily: typography.fontMain

    }
    return (
      <Text style={titleStyle}>
        {title}
      </Text>
    );
  };
}


export default NavigationLayout;