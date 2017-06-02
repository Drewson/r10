import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { TouchableOpacity, View, Text, Image, Platform } from 'react-native';
import { popSpeaker } from '../../lib/navigationHelpers'

class Speakers extends Component {

  static route = {
    navigationBar: {
      title: 'Speaker'
    }
  }

  render(){
    const speaker = this.props.speakerData;
    return(
      <View>
        <TouchableOpacity onPress={() => popSpeaker()} >
          <Text>About The Speaker</Text>
        </TouchableOpacity>
        <Image source={{ uri: speaker.image }} style={{height: 50, width: 50}} />
        <Text>{speaker.name}</Text>
        <Text>{speaker.bio}</Text>
      </View>
    );
  }
}

export default Speakers;