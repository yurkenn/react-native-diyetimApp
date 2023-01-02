import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: deviceSize.height / 1.5,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  input_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: deviceSize.width / 2.4,
    height: deviceSize.height / 3,
    resizeMode: 'contain',
  },
  nutrition_container: {
    flexDirection: 'row',
    width: deviceSize.width / 1,
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: colors.modalNutritionBackGround,
  },
  nutrition_inner_container: {
    alignItems: 'center',
  },
  nutrition_text: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.modalNutritionText,
    marginBottom: 10,
  },
  nutrition_numbers: {
    fontSize: 24,
    fontWeight: '400',
    color: colors.modalNutritionText,
  },
  details: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.grey400,
    marginBottom: 10,
  },
});
