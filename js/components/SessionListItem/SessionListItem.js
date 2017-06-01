import React from 'React';
import { ListView, View, Text, Image, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { goToSession } from '../../lib/navigationHelpers';
import moment from 'moment'


import { styles } from './styles';

const SessionListItem = ({ currentNavigatorUID, rowData }) => {
  return (
    <TouchableHighlight onPress={() => goToSession(currentNavigatorUID, rowData)}>
      <View>
        <Text>{moment.unix(rowData.start_time).format('h:mm A')}</Text>
        <Text>{rowData.location}</Text>
        <Text>{rowData.description}</Text>
      </View>
    </TouchableHighlight>
  )
}

SessionListItem.proptypes = {
};

export default SessionListItem;