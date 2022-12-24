import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.grey100,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 24,
    width: 327,
    height: 64,
    paddingRight: 20,
  },
  input: {
    flex: 1,
    paddingLeft: 20,
  },
});
