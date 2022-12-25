import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import Button from '../../../components/Button';
import styles from './GetStarted.styles';
import Images from '../../../components/ImageList';
import Swiper from 'react-native-swiper';

const GetStarted = ({navigation}) => {
  const imageList = [
    {
      id: 1,
      title: 'Eat Healthy',
      description:
        'Maintaining good health should be the primary focus of everyone.',
      image: Images.first,
    },
    {
      id: 2,
      title: 'Healthy Recipes',
      description:
        'Browse thousands of healthy recipes from all over the world.',
      image: Images.second,
    },
    {
      id: 3,
      title: 'Track Your Health',
      description: 'With amazing inbuilt tools you can track your progress.',
      image: Images.third,
    },
  ];

  const handleGetStarted = () => {
    navigation.navigate('SignUp');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Swiper>
        {imageList.map(item => (
          <View style={styles.headerContainer} key={item.id}>
            <Image style={styles.image} source={item.image} />
            <Text style={styles.h1}>{item.title}</Text>
            <Text style={styles.h2}>{item.description}</Text>
          </View>
        ))}
      </Swiper>
      <Button title="Get Started" onPress={handleGetStarted} />
      <View style={styles.textContainer}>
        <Text style={styles.t1}>Already Have An Account ?</Text>
        <Text onPress={handleLogin} style={styles.t2}>
          Log In
        </Text>
      </View>
    </View>
  );
};

export default GetStarted;
