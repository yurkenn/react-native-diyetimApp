import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {},
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.lightGreen,
    marginBottom: 50,
  },
  error: {
    marginLeft: 30,
    color: colors.orange,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  bottomText: {
    color: colors.grey400,
  },
  bottomButton: {
    color: colors.lightGreen,
    marginLeft: 5,
  },
});
