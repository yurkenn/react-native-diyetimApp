import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  button: {
    width: 290,
    height: 72,
    borderRadius: 20,
    margin: 25,
    backgroundColor: colors.lightGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '500',
  },
});
