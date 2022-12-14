import {View, Text, Image} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import styles from './FoodDetailModal.styles';
import Button from '../../Button';
import Icon from 'react-native-vector-icons/FontAwesome';
const FoodDetailModal = ({
  visible,
  onClose,
  onSend,
  item,
  carb,
  cal,
  protein,
  fiber,
  fat,
}) => {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      onSwipeComplete={onClose}
      swipeDirection="down"
      style={styles.modal}>
      <View style={styles.container}>
        <Icon
          name="close"
          size={30}
          color="black"
          onPress={onClose}
          style={styles.close}
        />
        <View style={styles.input_container}>
          <Image style={styles.image} source={{uri: item.food.image}} />
          <Text style={styles.label}>{item.food.label}</Text>
          <View style={styles.nutrition_container}>
            <View style={styles.nutrition_inner_container}>
              <Text style={styles.nutrition_text}>Protein</Text>
              <Text style={styles.nutrition_numbers}>{protein}g</Text>
            </View>
            <View style={styles.nutrition_inner_container}>
              <Text style={styles.nutrition_text}>Calories</Text>
              <Text style={styles.nutrition_numbers}>{cal}g</Text>
            </View>
            <View style={styles.nutrition_inner_container}>
              <Text style={styles.nutrition_text}>Fat</Text>
              <Text style={styles.nutrition_numbers}>{fat}g</Text>
            </View>

            <View style={styles.nutrition_inner_container}>
              <Text style={styles.nutrition_text}>Carbs</Text>
              <Text style={styles.nutrition_numbers}>{carb}g</Text>
            </View>
          </View>

          <Button title="Add To Favorites" onPress={onSend} />
        </View>
      </View>
    </Modal>
  );
};

export default FoodDetailModal;
