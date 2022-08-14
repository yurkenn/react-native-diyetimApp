import {View, TextInput} from 'react-native';
import React from 'react';
import styles from './Input.style';
const Input = ({placeholder}) => {
  return (
    <View>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default Input;
