import React from 'React';
import { ListView, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

const Schedule = ({ dataSource }) => {
  return (
    <ListView
      dataSource={dataSource}
      renderRow={(rowData) => {
        return (
          <View id={rowData.session_id}>
            <Text>{rowData.start_time}</Text>
            <Text>{rowData.location}</Text>
            <Text>{rowData.description}</Text>
          </View>
        )
      }
    }
    />
  );
}

Schedule.proptypes = {
};

export default Schedule;