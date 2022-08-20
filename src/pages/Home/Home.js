import {View, Text, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Input from '../../components/Input';
import HomeCard from '../../components/Cards/HomeCard';
const Home = () => {
  const [text, setText] = useState('');
  const {data, loading, error} = useFetch(
    `${Config.API_URL}search/instant?query=${text}`,
  );

  if (loading) {
    return <Loading />;
  }

  const renderData = ({item}) => {
    return <HomeCard branded={item} />;
  };

  return (
    <View>
      <Input onChangeText={setText} placeholder="Search foods to log" />
      <FlatList data={data.branded} renderItem={renderData} />
    </View>
  );
};

export default Home;
