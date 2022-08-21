import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Home.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeCard from '../../components/Cards/HomeCard/HomeCard';
const Home = ({navigation}) => {
  const handlePressPlus = () => {
    navigation.navigate('SearchFood');
  };

  return (
    <View style={styles.container}>
      <HomeCard onPress={handlePressPlus} title="BREAKFAST" />
      <HomeCard onPress={handlePressPlus} title="LUNCH" />
      <HomeCard onPress={handlePressPlus} title="DINNER" />
    </View>
  );
};

export default Home;
