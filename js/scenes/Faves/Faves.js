import React from 'React';
import { ListView, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import SessionListItem from '../../components/SessionListItem/';
import { styles } from './styles';

const Faves = ({ dataSource, faveIds }) => {
  return (
    <ListView
      dataSource={dataSource}
      renderRow={(rowData) => {
        return (
          <SessionListItem rowData={rowData} currentNavigatorUID="faves" faveIds={faveIds} />
        )
      }}
    />
  );
}

Faves.proptypes = {
};

export default Faves;