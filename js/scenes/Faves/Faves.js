import React from 'React';
import { ListView, View, Text, Image, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import SessionListItem from '../../components/SessionListItem/';
import { styles } from './styles';
import { goToSession } from '../../lib/navigationHelpers';

const Faves = ({ dataSource, faveIds }) => {
  return (
    <ListView
      dataSource={dataSource}
      renderRow={(rowData) => {
        return (
          <TouchableHighlight onPress={() => goToSession("faves", rowData)}>
            <View>
              <SessionListItem rowData={rowData} faveIds={faveIds} />
            </View>
          </TouchableHighlight>
        )
      }}
    />
  );
}

Faves.proptypes = {
};

export default Faves;