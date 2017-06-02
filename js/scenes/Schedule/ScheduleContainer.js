import React, { Component } from 'React';
import PropTypes from 'prop-types';
import Schedule from './Schedule';
import { connect } from 'react-redux';
import { _fetchSessions } from '../../redux/modules/sessions'
import { _fetchFaves, getFaveIds } from '../../redux/modules/faves';
import { queryFaves } from '../../config/models'
import { ActivityIndicator, ListView } from 'react-native'

class ScheduleContainer extends Component {

  static propTypes = {
  }

  static route = {
    navigationBar: {
      title: 'Schedule',
    }
  }

  componentDidMount(){
    this.props.dispatch(_fetchFaves())
    this.props.dispatch(_fetchSessions())
  }

  render(){
    if(this.props.isLoading){
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      )
    } else {
      return(
      <Schedule dataSource={this.props.dataSource} faveIds={this.props.faveIds} />
      )
    }
  }
}

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
    sectionHeaderHasChanged: (s1, s2) => s1 !== s2
})

function mapStateToProps(state){
  return {
    dataSource: ds.cloneWithRowsAndSections(
      state.sessions.sessionData.dataBlob,
      state.sessions.sessionData.sectionIds,
      state.sessions.sessionData.rowIds,
    ),
    isLoading: state.sessions.isLoading,
    faveIds: state.faves.faveIds,
  }
}

export default connect(mapStateToProps)(ScheduleContainer);