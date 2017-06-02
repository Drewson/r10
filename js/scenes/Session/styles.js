import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  time: {
    fontSize: 18,
    color: colors.red,
    fontFamily: typography.fontMain,
  },
  title: {
    fontSize: 26,
    padding: 10,
    paddingLeft: 0,
    fontFamily: typography.fontMain,
  },
  location: {
    fontSize: 18,
    fontFamily: typography.fontMain,
    color: colors.mediumGrey
  },
  description: {
    padding: 10,
    paddingLeft: 0,
    lineHeight: 25,
    fontSize: 20,
    fontFamily: typography.fontMainLight
  },
  present: {
    fontSize: 18,
    padding: 10,
    paddingLeft: 0,
    fontWeight: '600',
    color: colors.mediumGrey,
  },
  speakerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  speaker: {
    fontSize: 18,
    fontWeight: '500',
    paddingLeft: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  linearGradient: {
    padding: 10,
    width: '80%',
    borderRadius: 20,
  },
  heart: {
    position: 'absolute',
    top: 30,
    right: 30,
  },
  buttonText: {
    backgroundColor: 'rgba(52, 52, 52, 0)',
    color: 'white',
    textAlign:'center'
  }
});