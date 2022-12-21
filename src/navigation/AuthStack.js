import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import Sign from '../screens/auth/Sign';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Sign" component={Sign} />
    </Stack.Navigator>
  );
};

export default AuthStack;
