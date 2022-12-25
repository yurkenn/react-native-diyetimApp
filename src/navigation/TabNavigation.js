import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import Scanner from '../screens/Scanner';
import colors from '../styles/colors';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopWidth: 0,
          elevation: 0,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 75,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.lightGreen,
        tabBarInactiveTintColor: colors.grey400,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: colors.background,
          elevation: 0,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontSize: 16,
          fontWeight: 'bold',
          letterSpacing: 1,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="search1" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Scanner"
        component={Scanner}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="scan1" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="hearto" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
