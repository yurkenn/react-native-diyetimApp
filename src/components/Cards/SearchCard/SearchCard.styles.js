import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.searchCard,
    margin: 10,
    borderRadius: 10,
    padding: 10,
    height: 120,
    width: 313,
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  cal: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.lightGreen,
  },
  label: {
    fontSize: 16,
    color: colors.grey400,
    fontWeight: '400',
  },
  category: {
    fontSize: 12,
    fontWeight: '300',
    color: colors.grey400,
  },
});
