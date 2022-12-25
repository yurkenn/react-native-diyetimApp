import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    width: 300,
    height: 300,
  },
  headerContainer: {
    marginVertical: 25,
    alignItems: 'center',
  },
  h1: {
    marginVertical: 10,
    fontSize: 25,
    fontWeight: '600',
    color: '#000',
  },
  h2: {
    fontSize: 17,
    textAlign: 'center',
    marginHorizontal: 25,
  },
  textContainer: {
    flexDirection: 'row',
    marginVertical: 25,
  },
  t1: {
    fontSize: 15,
  },
  t2: {
    fontSize: 15,
    color: colors.lightGreen,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
