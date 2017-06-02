import React, { Component } from 'React';
import PropTypes from 'prop-types';
import Faves from './Faves';
import { connect } from 'react-redux';
import { _fetchSessions } from '../../redux/modules/sessions';
import { _fetchFaves } from '../../redux/modules/faves';
import { ActivityIndicator, ListView, Text } from 'react-native';

class FavesContainer extends Component {

  static propTypes = {
  }

  static route = {
    navigationBar: {
      title: 'Faves',
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
      <Faves dataSource={this.props.dataSource} faveIds={this.props.faveIds} />
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
    faveIds: state.faves.faveIds,
    dataSource: ds.cloneWithRowsAndSections(
      state.faves.favesData.dataBlob,
      state.faves.favesData.sectionIds,
      state.faves.favesData.rowIds,
    ),
    isLoading: state.faves.isLoading,
  }
}

export default connect(mapStateToProps)(FavesContainer);