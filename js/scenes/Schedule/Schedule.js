import React from 'React';
import { ListView, View, Text, Image, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import SessionListItem from '../../components/SessionListItem/';
import { styles } from './styles';
import { goToSession } from '../../lib/navigationHelpers';

const Schedule = ({ dataSource, addFavorite, faveIds }) => {
  return (
    <ListView
      dataSource={dataSource}
      renderRow={(rowData) => {
        return (
          <TouchableHighlight onPress={() => goToSession("schedule", rowData)}>
            <View>
              <SessionListItem rowData={rowData} faveIds={faveIds} />
            </View>
          </TouchableHighlight>
        )
      }}
    />
  );
}

Schedule.proptypes = {
};

export default Schedule;