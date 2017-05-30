import React, { Component } from 'React';
import PropTypes from 'prop-types';
import Schedule from './Schedule';

class ScheduleContainer extends Component {

  static propTypes = {
  }

  static route = {
    navigationBar: {
      title: 'Schedule',
    }
  }

  render(){
    return(
      <Schedule />
    )
  }
}

export default ScheduleContainer;