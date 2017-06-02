import React, { Component } from 'React';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Session from './Session';
import { ActivityIndicator, ListView, View, Text } from 'react-native';
import { _fetchSpeakers } from '../../redux/modules/speakers';
import { deleteFavorite, addFavorite, _fetchFaves } from '../../redux/modules/faves';

class SessionContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Session'
    }
  }

  componentDidMount(){
    this.props.dispatch(_fetchSpeakers(this.props.sessionData.speaker));
    this.props.dispatch(_fetchFaves());
  }

  newFavorite(data){
    this.props.dispatch(addFavorite(data.session_id))
  }

  deleteFavorite(data){
    this.props.dispatch(deleteFavorite(data.session_id))
  }
  render(){
    if(this.props.isLoading){
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      )
    } else {
      return(
      <Session
        data={this.props.sessionData}
        speaker={this.props.speakers}
        addFavorite={this.newFavorite.bind(this)}
        deleteFavorite={this.deleteFavorite.bind(this)}
        faveIds={this.props.faveIds}
      />
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.sessions.isLoading,
    speakers: state.speakers.speakerInfo,
    faveIds: state.faves.faveIds,
  }
}

// const faveIds = queryFaves();

export default connect(mapStateToProps)(SessionContainer);