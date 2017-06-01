import React, { Component } from 'React';
import PropTypes from 'prop-types';
import Schedule from './Schedule';
import { connect } from 'react-redux';
import { _fetchSessions } from '../../redux/modules/sessions'
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
    this.props.fetchSessions()
  }

  render(){
    if(this.props.isLoading){
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      )
    } else {
      return(
      <Schedule dataSource={this.props.dataSource} />
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
    isLoading: state.sessions.isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchSessions () {
      dispatch(_fetchSessions())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleContainer);