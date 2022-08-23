import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    padding: 10,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  image_container: {
    backgroundColor: 'white',
    width: '100%',
    height: 300,
    alignItems: 'center',
    borderRadius: 20,
    elevation: 20,
  },
  nut_container: {
    flexDirection: 'row',
    borderWidth: 1,
    width: '70%',
    padding: 2,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  food_name: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});
