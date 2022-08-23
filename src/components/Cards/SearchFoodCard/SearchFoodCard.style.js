import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  image: {
    width: 60,
    height: 60,
  },
  inner_container: {
    flex: 1,
    marginLeft: 10,
  },
  food_info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  food_name: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
  },
  nf_calories: {
    marginRight: 3,
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: 'flex-end',
    color: 'green',
  },
  nf_calories_text: {
    fontSize: 15,
    justifyContent: 'flex-end',
  },
  serving_info: {
    flexDirection: 'row',
  },
  brand_name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'grey',
  },
  serving_qty: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'grey',
    marginLeft: 5,
  },
  serving_unit: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'grey',
    marginLeft: 5,
  },
});
