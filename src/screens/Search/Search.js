import {View, FlatList, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from './Search.styles';
import Input from '../../components/Input';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch/useFetch';
import SearchCard from '../../components/Cards/SearchCard/SearchCard';

const Search = () => {
  const [search, setSearch] = useState('');
  const {data, loading, error, setIngr} = useFetch(Config.API_URL);

  console.log(data.hints);

  const renderItem = ({item}) => {
    return <SearchCard item={item} />;
  };

  const handleSearch = () => {
    search === '' ? Alert.alert('Please enter a search term') : setIngr(search);
    return setSearch('');
  };

  return (
    <View style={styles.container}>
      <Input
        icon="search"
        placeholder={'Search recipes...'}
        onChangeText={text => setSearch(text)}
        value={search}
        onPress={handleSearch}
      />
      <FlatList data={data.hints} renderItem={renderItem} />
    </View>
  );
};

export default Search;
