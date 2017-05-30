import React, { Component } from 'React';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import About from './About';
import { getConductLoading, getConductError, getConduct, _fetchConduct } from '../../redux/modules/conduct'

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
      isLoading: true,
    }
  }

  componentDidMount() {
    this.props.dispatch(_fetchConduct())
  }
  componentDidUpdate() {
    if ( this.state.dataSource && this.state.isLoading ) {
      this.setState({ isLoading: false, });
    }
  }

  render(){
    return(
      <About codes={this.state.codes} />
    )
  }
}

function mapStateToProps(state) {
    return {
        codes: state.codes
    };
}

export default connect(mapStateToProps)(AboutContainer);