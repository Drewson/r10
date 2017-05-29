import React from 'React';
import { ScrollView, View, Text, Image } from 'react-native';
import Conduct from '../../components/ConductItem/index';
import PropTypes from 'prop-types';

import { styles } from './styles';

const About = ({ codes }) => {
  return(
    <ScrollView style={styles.container}>
      <View style={styles.logoWrap}>
        <Image source={require('../../assets/images/r10_logo.png')} />
      </View>
      <Text>R10 is a conference that focuses on just about any topic related to dev</Text>
      <Text style={styles.aboutTitles}>Date & Venue</Text>
      <Text>The R10 conference will take place on tuesday june 27. 2017 in Vancouver BC</Text>
      <Text style={styles.aboutTitles}>Codes of Conduct</Text>
      {
        codes.map((code, i) => <Conduct code={code} key={i} />)
      }
    </ScrollView>
  );
}

About.proptypes = {
};

export default About;