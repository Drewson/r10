import React, { Component } from 'React';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Session from './Session';
import { ActivityIndicator, ListView, View, Text } from 'react-native';
import { _fetchSpeakers } from '../../redux/modules/speakers';

class SessionContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Session'
    }
  }

  componentDidMount(){
    this.props.dispatch(_fetchSpeakers(this.props.sessionData.speaker));
  }

  render(){
    return (
      <Session data={this.props.sessionData} speaker={this.props.speakers} />
    )
  }
}

function mapStateToProps(state) {
  return {
    speakers: state.speakers.speakerInfo
  }
}

export default connect(mapStateToProps)(SessionContainer);