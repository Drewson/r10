import React from 'react';
import { View, Text, Image, Platform } from 'react-native';
import moment from 'moment';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const Session = ({ data, speaker }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.location}>{data.location}</Text>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.time}>{moment.unix(data.start_time).format('h:mm A')}</Text>
      <Text style={styles.description}>{data.description}</Text>
      <Text style={styles.present}>Presented By: </Text>
      <Image
        source={{uri: speaker.image}}
        style={styles.image}
      ></Image>
      <Text style={styles.speaker}>{speaker.name}</Text>
        <Icon name={Platform.OS === "ios"  ? 'ios-heart' : 'md-heart'} size={24}/>
    </View>
  )
}

export default Session;