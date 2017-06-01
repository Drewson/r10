import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  time: {
    backgroundColor: colors.lightGrey,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    fontFamily: typography.fontMain,
  },
  title: {

    fontFamily: typography.fontMain,
    padding: 10
  },
  location: {
    fontFamily: typography.fontMain,
    paddingBottom: 10,
    paddingLeft: 10,
    color: colors.mediumGrey
  },
  heart: {
    position: 'absolute',
    bottom: 20,
    right: 10,
  }
});