import {View, FlatList, TouchableOpacity} from 'react-native';
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

  const handleAddSelectedItemtoBasket = nix_item_id => {
    navigation.navigate('FoodDetail', {nix_item_id});
  };

  const renderData = ({item}) => {
    return (
      <SearchFoodCard
        branded={item}
        onPress={() => handleAddSelectedItemtoBasket(item.nix_item_id)}
      />
    );
  };

  const handleGoHome = () => {
    navigation.goBack();
  };
  console.log(data.branded);
  return (
    <View style={styles.container}>
      <Input onChangeText={setText} placeholder="Search foods to log" />
      <FlatList data={data.branded} renderItem={renderData} />
      <Button style={styles.button} text="Back" onPress={handleGoHome} />
    </View>
  );
};

export default SearchFood;
