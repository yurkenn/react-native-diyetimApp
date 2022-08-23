import {View, FlatList} from 'react-native';
import React, {useState} from 'react';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import FoodDetailCard from '../../components/Cards/FoodDetailCard';
const FoodDetail = ({route, navigation}) => {
  const {nix_item_id} = route.params;
  const {data, loading} = useFetch(
    `${Config.API_URL}search/item?nix_item_id=${nix_item_id}`,
  );

  if (loading) {
    return <Loading />;
  }

  const renderFoods = ({item}) => {
    return <FoodDetailCard items={item} />;
  };
  return (
    <View>
      <FlatList data={data.foods} renderItem={renderFoods} />
    </View>
  );
};

export default FoodDetail;
