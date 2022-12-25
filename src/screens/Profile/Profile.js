import {View, Text} from 'react-native';
import React from 'react';
import styles from './Profile.styles';
import Button from '../../components/Button';
import {logoutFB} from '../../firebase';
const Settings = () => {
  const handleLogout = () => {
    logoutFB();
  };

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button title={'logout'} onPress={handleLogout} />
    </View>
  );
};

export default Settings;
