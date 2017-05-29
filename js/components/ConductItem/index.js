import React from 'React';
import { ScrollView, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

const Conduct = ({ code , i }) => {
  return(
    <View key={i + Date.now()}>
      <Text style={styles.conductTitle} >- {code.title}</Text>
      <Text style={styles.conductDescription} >{code.description}</Text>
    </View>
  );
}

Conduct.proptypes = {
};

export default Conduct;