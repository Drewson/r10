import React from 'react';
import { View, Text, Image } from 'react-native';
import moment from 'moment'

const Session = ({ data, speaker }) => {
  console.log(speaker);
  return (
    <View>
      <Text>{data.locaiton}</Text>
      <Text>{data.title}</Text>
      <Text>{moment.unix(data.start_time).format('h:mm A')}</Text>
      <Text>{data.description}</Text>
      <Text>Presented By: </Text>
      <Image source() ></Image>
      <Text>{speaker.name}</Text>
    </View>
  )
}

export default Session;