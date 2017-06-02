//BUild Drawer navigator
import React, { Component } from 'react';
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem as DrawerItem,
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
      <DrawerNavigation
        initialItem="schedule"
        drawerWidth={300}
      >

        <DrawerItem
          id="schedule"
          title="Schedule"
          renderIcon={isSelected => this.renderIcon('md-calendar', isSelected)}
          renderTitle={isSelected => this.renderTitle('Schedule', isSelected)}
        >
          <StackNavigation
            navigatorUID="schedule"
            initialRoute={Router.getRoute('schedule')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerItem>

        <DrawerItem
          id="faves"
          title="faves"
          renderIcon={isSelected => this.renderIcon('md-heart', isSelected)}
          renderTitle={isSelected => this.renderTitle('Favorites', isSelected)}
        >
          <StackNavigation
            id="about"
            initialRoute={Router.getRoute('faves')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerItem>

        <DrawerItem
          id="about"
          title="about"
          renderIcon={isSelected => this.renderIcon('md-information-circle', isSelected)}
          renderTitle={isSelected => this.renderTitle('About', isSelected)}
        >
          <StackNavigation
            id="about"
            initialRoute={Router.getRoute('about')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerItem>

      </DrawerNavigation>
    );
  }

  renderIcon(iconName, isSelected){
    return <Icon name={iconName} size={24} color={ isSelected ? colors.black : colors.mediumGrey} />
  }

  renderTitle(title, isSelected) {
    const titleStyle = {
      fontSize: 16,
      paddingLeft: 10,
      fontFamily: typography.fontMain,
    }
    return (
      <Text style={titleStyle} color={isSelected ? colors.black : colors.mediumGrey}>
        {title}
      </Text>
    );
  };
}


export default NavigationLayout;