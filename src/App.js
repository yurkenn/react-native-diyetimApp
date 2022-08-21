import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';
import SearchFood from './pages/SearchFood';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
  }, []);

  const HomeStack = () => {
    return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          component={Home}
          name="HomeScreen"
          options={{
            title: 'Home',
            tabBarIcon: ({size}) => <Icon name={'home'} size={size} />,
          }}
        />
        <Tab.Screen
          component={Profile}
          name="ProfileScreen"
          options={{
            title: 'Profile',
            tabBarIcon: ({size}) => <Icon name={'person'} size={size} />,
          }}
        />
        <Tab.Screen
          component={Settings}
          name="SettingsScreen"
          options={{
            title: 'Settings',
            tabBarIcon: ({size}) => <Icon name={'settings'} size={size} />,
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!isSignedIn ? (
          <>
            <Stack.Screen component={SignIn} name="SignInScreen" />
            <Stack.Screen component={SignUp} name="SignUpScreen" />
          </>
        ) : (
          <>
            <Stack.Screen component={HomeStack} name="HomeStack" />
            <Stack.Screen component={SearchFood} name="SearchFood" />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
