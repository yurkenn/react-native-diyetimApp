import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './HomeCard.style';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeCard = ({onPress, title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Icon name="add" size={15} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.added_foods}>
        <Text>No foods logged yet</Text>
      </View>
    </View>
  );
};

export default HomeCard;
