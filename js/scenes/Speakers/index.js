import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { TouchableOpacity, View, Text, Image, Platform } from 'react-native';
import { popSpeaker } from '../../lib/navigationHelpers';
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from './styles';

class Speakers extends Component {

  static route = {
    navigationBar: {
      title: 'Speaker'
    }
  }

  render(){
    const speaker = this.props.speakerData;
    return(
      <View style={ styles.speakerContainer } >
        <TouchableOpacity onPress={() => popSpeaker()} >
          <Icon name="ios-close" color='white' size={36} style={styles.x} />
          <Text style={ styles.aboutTop }>About The Speaker</Text>
        </TouchableOpacity>
        <View style={ styles.speakerBio }>
          <View style={ styles.portraitContainer } >
            <Image source={{ uri: speaker.image }} style={{ height: 150, width: 150, borderRadius: 75 }}   />
          </View>
            <Text style={ styles.speakerName } >{ speaker.name }</Text>
            <Text style={ styles.speakerStuff } >{ speaker.bio }</Text>
        </View>
      </View>
    );
  }
}

export default Speakers;