import React from 'react';
import { TouchableOpacity, View, Text, Image, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { goToSpeaker } from '../../lib/navigationHelpers';

const Session = ({ data, speaker, addFavorite, deleteFavorite, faveIds }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.location}>{data.location}</Text>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.time}>{moment.unix(data.start_time).format('h:mm A')}</Text>
      <Text style={styles.description}>{data.description}</Text>
      <Text style={styles.present}>Presented By: </Text>
      <TouchableOpacity onPress={() => goToSpeaker(speaker)} style={styles.speakerContainer}>
      {
        speaker.image !== '' &&
        <Image
          source={{uri: speaker.image}}
          style={styles.image}
        ></Image>
      }
        <Text style={styles.speaker}>{speaker.name}</Text>
      </TouchableOpacity>
      {
        faveIds.includes(data.session_id) &&
        <Icon name={Platform.OS === "ios"  ? 'ios-heart' : 'md-heart'} size={24} style={styles.heart} />
      }
      {
        !faveIds.includes(data.session_id) ?
        <TouchableOpacity onPress={() => addFavorite(data)}>
          <LinearGradient
            colors={['#9963ea', '#8797D6']}
            style={styles.linearGradient}
            start={{x: 0, y: .15}} end={{x: 1, y: 0.15}}
          >
            <Text style={styles.buttonText}>Add To Favorites</Text>
          </LinearGradient>
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={() => deleteFavorite(data)} style={styles.buttonContainer} >
          <LinearGradient
            colors={['#9963ea', '#8797D6']}
            style={styles.linearGradient}
            start={{x: 0, y: .1}} end={{x: 1, y: 0.1}}
          >
            <Text style={styles.buttonText}>Remove From Favorites</Text>
          </LinearGradient>
        </TouchableOpacity>
      }
    </View>
  )
}

export default Session;