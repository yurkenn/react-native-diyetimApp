import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  deleteInfo: {
    color: colors.grey400,
    fontSize: 12,
    fontWeight: '300',
    textAlign: 'center',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyHeader: {
    fontSize: 24,
    fontWeight: '500',
    color: colors.grey500,
    marginVertical: 10,
    letterSpacing: -0.24,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: colors.grey500,
    marginVertical: 10,
  },
});
