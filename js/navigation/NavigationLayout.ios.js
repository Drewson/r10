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
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles'

const defaultRouteConfig = {
  navigationBar:{
    tintColor: colors.white,
    titleStyle: {
      fontFamily: typography.fontMain
    },
    renderBackground: () => (
      <LinearGradient
        colors={['#cf392a', '#9963ea']}
        style={styles.linearGradient}
        start={{x: 0.25, y: 1}} end={{x: 1, y: 0.25}}
      >
      </LinearGradient>
    ),
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
        initialTab="schedule"
        tabBarColor={colors.black}
      >

        <TabItem
          id="schedule"
          title="Schedule"
          renderIcon={isSelected => this.renderIcon('ios-calendar', isSelected)}
          renderTitle={this.renderTitle}
        >
          <StackNavigation
            navigatorUID="schedule"
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