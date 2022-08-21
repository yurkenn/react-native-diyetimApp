import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Input from '../../components/Input';
import SearchFoodCard from '../../components/Cards/SearchFoodCard';
import Button from '../../components/Button';
import styles from './SearchFood.style';
const SearchFood = ({navigation}) => {
  const [text, setText] = useState('');
  const {data, loading} = useFetch(
    `${Config.API_URL}search/instant?query=${text}`,
  );

  if (loading) {
    return <Loading />;
  }

  const renderData = ({item}) => {
    return <SearchFoodCard branded={item} />;
  };

  const handleGoHome = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Input onChangeText={setText} placeholder="Search foods to log" />
      <FlatList data={data.branded} renderItem={renderData} />
      <Button style={styles.button} text="Go Home" onPress={handleGoHome} />
    </View>
  );
};

export default SearchFood;
