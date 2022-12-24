import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import style from './Loading.styles';
const Loading = () => {
  return (
    <View style={style.container}>
      <ActivityIndicator style={style.loading} size="large" color="white" />
    </View>
  );
};

export default Loading;
