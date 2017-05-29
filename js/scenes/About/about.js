import React from 'React';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

const About = ({ codes }) => {
  return(
    <View style={styles.container}>
      <Text>Hello WOrld</Text>
    </View>
  );
}

About.proptypes = {

};

export default About;