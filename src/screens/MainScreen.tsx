import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './home'
import Workers from './workers';
import Operations from './operations';
import Finances from './finances';
import Settings from './settings';

import { icons } from '../styles/icons';
import { capitalize } from '../utils';

const Tab = createBottomTabNavigator();

export const MainScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          title: capitalize(route.name),
            tabBarIcon: ({focused, color, size}) => {
              const iconKey = route.name;
              const icon = icons[iconKey];
              if (icon) {
                const {focused: focussedIcon, outline: outlinedIcon} = icon;
                const iconName = focused ? focussedIcon : outlinedIcon;
                return <Ionicons name={iconName} size={size} color={color} />;
              } else {
                return undefined;
              }
            },
        })}>
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="workers" component={Workers} />
        <Tab.Screen name="operations" component={Operations} />
        <Tab.Screen name="finances" component={Finances} />
        <Tab.Screen name="settings" component={Settings} />
      </Tab.Navigator>
    );
};
