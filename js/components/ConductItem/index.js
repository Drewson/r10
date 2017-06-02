import React, { Component } from 'React';
import {
  ScrollView,
  View,
  Text,
  LayoutAnimation,
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

class Conduct extends Component {

  constructor(){
    super();
    this.state = {
      expanded: false,
    }
  }

  pressAnimate = () => {
    LayoutAnimation.easeInEaseOut();
    this.setState({
      expanded: !this.state.expanded,
    })
  }

  render(){
    return(
      <View key={this.props.i + Date.now()}>
        <TouchableOpacity onPress={() => this.pressAnimate()} >
          <Text style={styles.conductTitle} >- {this.props.code.title}</Text>
        </TouchableOpacity>
        <Text style={ this.state.expanded ? styles.openDescription : styles.closedDescription} >{this.props.code.description}</Text>
      </View>
    );
  }
}

Conduct.proptypes = {
};

export default Conduct;