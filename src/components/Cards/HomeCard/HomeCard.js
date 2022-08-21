import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './HomeCard.style';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeCard = ({onPress, title}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.title_container}>
        <Text style={styles.title}>{title}</Text>
        <Icon name="add" size={20} style={styles.icon} />
      </TouchableOpacity>
      <View>
        <Text>Cappicino</Text>
      </View>
    </View>
  );
};

export default HomeCard;
