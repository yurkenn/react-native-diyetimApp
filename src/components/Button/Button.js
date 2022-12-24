import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './Button.style';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
