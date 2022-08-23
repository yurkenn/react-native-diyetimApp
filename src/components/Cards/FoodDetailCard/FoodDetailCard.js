import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './FoodDetailCard.style';

const FoodDetailCard = ({items}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={{uri: items.photo.thumb}}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.food_name}>{items.food_name}</Text>
      <ScrollView>
        <View style={styles.nut_container}>
          <Text>protein : </Text>
          <Text>{items.full_nutrients[0].value} gr</Text>
        </View>
        <View style={styles.nut_container}>
          <Text>fat : </Text>
          <Text>{items.full_nutrients[1].value} gr</Text>
        </View>
        {items.full_nutrients[2] && (
          <View style={styles.nut_container}>
            <Text>Carbohydrate : </Text>
            <Text>{items.full_nutrients[2].value} gr</Text>
          </View>
        )}
        {items.full_nutrients[3] && (
          <View style={styles.nut_container}>
            <Text>Energy : </Text>
            <Text>{items.full_nutrients[3].value} kcal</Text>
          </View>
        )}
        {items.full_nutrients[4] && (
          <View style={styles.nut_container}>
            <Text>Sugar : </Text>
            <Text>{items.full_nutrients[4].value} gr</Text>
          </View>
        )}
        {items.full_nutrients[5] && (
          <View style={styles.nut_container}>
            <Text>Sugar Added : </Text>
            <Text>{items.full_nutrients[5].value} gr</Text>
          </View>
        )}
        {items.full_nutrients[6] && (
          <View style={styles.nut_container}>
            <Text>Fiber : </Text>
            <Text>{items.full_nutrients[6].value} gr</Text>
          </View>
        )}
        {items.full_nutrients[7] && (
          <View style={styles.nut_container}>
            <Text>Calcium : </Text>
            <Text>{items.full_nutrients[7].value} mg</Text>
          </View>
        )}
        {items.full_nutrients[8] && (
          <View style={styles.nut_container}>
            <Text>Iron : </Text>
            <Text>{items.full_nutrients[8].value} mg</Text>
          </View>
        )}
        {items.full_nutrients[9] && (
          <View style={styles.nut_container}>
            <Text>Potassium : </Text>
            <Text>{items.full_nutrients[9].value} mg</Text>
          </View>
        )}
        {items.full_nutrients[10] && (
          <View style={styles.nut_container}>
            <Text>Sodium : </Text>
            <Text>{items.full_nutrients[10].value} mg</Text>
          </View>
        )}
        {items.full_nutrients[11] && (
          <View style={styles.nut_container}>
            <Text>Vitamin D : </Text>
            <Text>{items.full_nutrients[11].value} IU</Text>
          </View>
        )}
        {items.full_nutrients[12] && (
          <View style={styles.nut_container}>
            <Text>Vitamin D (D2 , D3) : </Text>
            <Text>{items.full_nutrients[12].value} Âµg</Text>
          </View>
        )}
        {items.full_nutrients[13] && (
          <View style={styles.nut_container}>
            <Text>Cholesterol : </Text>
            <Text>{items.full_nutrients[13].value} mg</Text>
          </View>
        )}
        {items.full_nutrients[14] && (
          <View style={styles.nut_container}>
            <Text>Fatty acids : </Text>
            <Text>{items.full_nutrients[14].value} mg</Text>
          </View>
        )}
        {items.full_nutrients[15] && (
          <View style={styles.nut_container}>
            <Text>Fatty acids , total satuared : </Text>
            <Text>{items.full_nutrients[15].value} g</Text>
          </View>
        )}
        {items.full_nutrients[16] && (
          <View style={styles.nut_container}>
            <Text>Fatty acids, total monounsaturated : </Text>
            <Text>{items.full_nutrients[16].value} g</Text>
          </View>
        )}
        {items.full_nutrients[17] && (
          <View style={styles.nut_container}>
            <Text>Fatty acids, total polyunsaturated : </Text>
            <Text>{items.full_nutrients[17].value} g</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default FoodDetailCard;
