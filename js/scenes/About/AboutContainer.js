import React, { Component } from 'React';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import About from './About';
import { _fetchConduct } from '../../redux/modules/conduct'
import { ActivityIndicator } from 'react-native'

class AboutContainer extends Component {

  static propTypes = {
  }

  static route = {
    navigationBar: {
      title: 'About',
    }
  }

  constructor (){
    super();

    this.state = {
      dataSource: [],
      codes: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    this.props.dispatch(_fetchConduct())
  }
  componentDidUpdate() {
    if ( this.state.codes && this.state.isLoading ) {
      this.setState({ isLoading: false, });
    }
  }

  render(){
    if(this.state.isLoading){
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      )
    } else {
      return(
        <About codes={this.props.codes.conductData} />
      )
    }
  }
}

AboutContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        codes: state.conduct
    };
}

export default connect(mapStateToProps)(AboutContainer);