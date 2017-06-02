import React from 'React';
import { ListView, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import SessionListItem from '../../components/SessionListItem/';
import { styles } from './styles';

const Schedule = ({ dataSource, addFavorite, faveIds }) => {
  console.log(faveIds)
  return (
    <ListView
      dataSource={dataSource}
      renderRow={(rowData) => {
        return (
          <SessionListItem rowData={rowData} currentNavigatorUID="schedule" faveIds={faveIds} />
        )
      }}
    />
  );
}

Schedule.proptypes = {
};

export default Schedule;