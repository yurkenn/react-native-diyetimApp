import React from 'react';
import Router from './navigation/Router';
import store from './store/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
