import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectFavorites} from '../../store/favoriteSlice';
import SearchCard from '../../components/Cards/SearchCard/SearchCard';
import styles from './Favorites.styles';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  console.log(favorites);

  const renderItem = ({item}) => {
    return <SearchCard item={item} />;
  };

  const emtpyList = (
    <View style={styles.emptyContainer}>
      <Image
        style={styles.image}
        source={require('../../assets/images/noFood.png')}
      />
      <Text style={styles.emptyHeader}>No Foods Found</Text>
      <Text style={styles.emptyText}>
        You don’t save any food. Go ahead, search and save your favorite food
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        emtpyList
      ) : (
        <FlatList data={favorites} renderItem={renderItem} />
      )}
    </View>
  );
};

export default Favorites;
