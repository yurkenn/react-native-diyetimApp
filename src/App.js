import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={SignIn} name="SignInScreen" />
        <Stack.Screen component={SignUp} name="SignUpScreen" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
