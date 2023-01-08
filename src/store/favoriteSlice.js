import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    deleteFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        item => item.food.foodId !== action.payload,
      );
    },
  },
});

export const {addFavorite, deleteFavorite} = favoriteSlice.actions;
export const selectFavorites = state => state.favorites.favorites;
export default favoriteSlice.reducer;
