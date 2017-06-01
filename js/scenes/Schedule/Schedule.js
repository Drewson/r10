import React from 'React';
import { ListView, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import SessionListItem from '../../components/SessionListItem/';
import { styles } from './styles';

const Schedule = ({ dataSource }) => {
  return (
    <ListView
      dataSource={dataSource}
      renderRow={(rowData) => {
        return (
          <SessionListItem rowData={rowData} currentNavigatorUID="schedule" />
        )
      }}
    />
  );
}

Schedule.proptypes = {
};

export default Schedule;