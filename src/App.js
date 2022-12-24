import React from 'react';
import Router from './navigation/Router';
import store from './store/store';
import {Provider} from 'react-redux';
import FlashMessage from 'react-native-flash-message';
const App = () => {
  return (
    <Provider store={store}>
      <Router />
      <FlashMessage position="top" />
    </Provider>
  );
};

export default App;
