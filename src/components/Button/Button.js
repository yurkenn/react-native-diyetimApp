import {TouchableOpacity, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './Button.style';

const Button = ({title, onPress, loading}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <View>
          <Text style={styles.text}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
