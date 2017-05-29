import React, { Component } from 'React';
import PropTypes from 'prop-types';
import About from './About';

class AboutContainer extends Component {

  static propTypes = {
  }

  constructor (){
    super();

    this.state = {
      dataSource: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    let endpoint = 'https://r10app-95fea.firebaseio.com/code_of_conduct.json';
    fetch(endpoint)
      .then((response) => response.json())
      .then((result) => {
        this.setState({ dataSource: result });
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
      <About codes={this.state.dataSource} />
    )
  }
}

export default AboutContainer;