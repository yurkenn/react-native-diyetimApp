import {View, Text} from 'react-native';
import React from 'react';
import styles from './Scanner.styles';
import Button from '../../components/Button';
import ImagePicker from 'react-native-image-crop-picker';

const Scanner = () => {
  const handleOpenCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Scan Barcod" onPress={handleOpenCamera} />
    </View>
  );
};

export default Scanner;
