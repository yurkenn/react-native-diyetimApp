import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './SearchCard.styles';
const SearchCard = ({item}) => {
  let Cal;
  if (item.food && item.food.nutrients) {
    Cal = item.food.nutrients.ENERC_KCAL;
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: item.food.image}} />
      </View>
      <View style={styles.textContainer}>
        {Cal && <Text style={styles.cal}>{Cal} Kcal</Text>}
        <Text style={styles.label}>{item.food.label}</Text>
        <Text style={styles.category}>{item.food.category}</Text>
      </View>
    </View>
  );
};

export default SearchCard;
