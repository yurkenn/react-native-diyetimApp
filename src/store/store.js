import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import favoriteReducer from './favoriteSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    favorites: favoriteReducer,
  },
});
