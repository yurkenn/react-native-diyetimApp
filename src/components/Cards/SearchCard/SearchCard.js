import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './SearchCard.styles';
import FoodDetailModal from '../../Modal/FoodDetailModal/FoodDetailModal';
import {useState} from 'react';
const SearchCard = ({item}) => {
  const [isVisible, setIsVisible] = useState(false);

  let Cal;
  let Carb;
  let Fat;
  let Protein;
  let Fiber;
  if (item.food && item.food.nutrients) {
    Cal = item.food.nutrients.ENERC_KCAL?.toFixed(1);
    Carb = item.food.nutrients.CHOCDF?.toFixed(1);
    Fat = item.food.nutrients.FAT?.toFixed(1);
    Protein = item.food.nutrients.PROCNT?.toFixed(1);
    Fiber = item.food.nutrients.FIBTG?.toFixed(1);
  }

  const handleModalToggle = () => {
    setIsVisible(!isVisible);
  };

  const handleModalSend = () => {
    handleModalToggle();
  };

  const foodName =
    item.food.label.length > 20
      ? item.food.label.slice(0, 20) + '...'
      : item.food.label;

  return (
    <TouchableOpacity onPress={handleModalToggle}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: item.food.image}} />
        </View>
        <View style={styles.textContainer}>
          {Cal && <Text style={styles.cal}>{Cal} Kcal</Text>}
          <Text style={styles.label}>{foodName}</Text>
          <Text style={styles.category}>{item.food.category}</Text>
        </View>
        <FoodDetailModal
          visible={isVisible}
          onClose={handleModalToggle}
          onSend={handleModalSend}
          item={item}
          carb={Carb}
          fat={Fat}
          protein={Protein}
          fiber={Fiber}
          cal={Cal}
        />
      </View>
    </TouchableOpacity>
  );
};

export default SearchCard;
