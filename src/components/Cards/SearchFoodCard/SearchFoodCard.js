import {View, Text, Image} from 'react-native';
import React, {memo} from 'react';
import styles from './SearchFoodCard.style';
const SearchFoodCard = ({branded}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.food_name}>{branded.food_name}</Text>
      <Image style={styles.image} source={{uri: branded.photo.thumb}} />
    </View>
  );
};

export default memo(SearchFoodCard);
