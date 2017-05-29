import React, { Component } from 'React';
import PropTypes from 'prop-types';

import About from './About';

class AboutContainer extends Component {

  static propTypes = {
  }

  constructor (){
    super();
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this.state = {
      dataSource: this.ds,
      isLoading: true,
    }
  }

  componentDidMount() {
    let endpoint = 'https://robot-data.firebaseio.com/robots.json';
    fetch(endpoint)
      // if fetch is successful, read our JSON out of the response
      .then((response) => response.json())
      .then((result) => {
        this.setState({ dataSource: this.ds.cloneWithRows(result) });
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  }
  componentDidUpdate() {
    if ( this.state.dataSource && this.state.isLoading ) {
      this.setState({ isLoading: false, });
    }
  }

  render(){
    return(
      <About />
    )
  }
}

export default AboutContainer;