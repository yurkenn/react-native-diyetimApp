import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import styles from './SearchFoodCard.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
const SearchFoodCard = ({branded, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: branded.photo.thumb}} />

        <View style={styles.inner_container}>
          <View style={styles.food_info}>
            <Text style={styles.food_name}>{branded.food_name}</Text>
            <Text style={styles.nf_calories}>
              {branded.nf_calories.toFixed(0)}
            </Text>
            <Text style={styles.nf_calories_text}>Cal</Text>
          </View>
          <View style={styles.serving_info}>
            <Text style={styles.brand_name}>{branded.brand_name},</Text>
            <Text style={styles.serving_qty}>{branded.serving_qty}</Text>
            <Text style={styles.serving_unit}>{branded.serving_unit}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(SearchFoodCard);
