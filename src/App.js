import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={SignIn} name="SignInScreen" />
        <Stack.Screen component={SignUp} name="SignUpScreen" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
