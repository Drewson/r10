import React from 'React';
import { Platform, ListView, View, Text, Image, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { goToSession } from '../../lib/navigationHelpers';
import moment from 'moment'
import Icon from 'react-native-vector-icons/Ionicons'


import { styles } from './styles';

const SessionListItem = ({ currentNavigatorUID, rowData }) => {
  return (
    <TouchableHighlight onPress={() => goToSession(currentNavigatorUID, rowData)}>
      <View style={styles.container}>
        <Text style={styles.time}>{moment.unix(rowData.start_time).format('h:mm A')}</Text>
        <Text style={styles.title}>{rowData.title}</Text>
        <Text style={styles.location}>{rowData.location}</Text>
        <Icon name={Platform.OS === "ios"  ? 'ios-heart' : 'md-heart'} size={20} style={styles.heart} />
      </View>
    </TouchableHighlight>
  )
}

SessionListItem.proptypes = {
};

export default SessionListItem;