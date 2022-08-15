import {View, TextInput} from 'react-native';
import React from 'react';
import styles from './Input.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Input = ({placeholder, onChangeText, value, isSecure, icon}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
      />
      <Icon name={icon} size={30} />
    </View>
  );
};

export default Input;
