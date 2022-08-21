import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from './LandingScreen';
import SignUpScreen from './SignUpScreen';
import HomeScreen from './HomeScreen';

const RootStack = createStackNavigator();

const RootStackScreen = () => (
  <RootStack.Navigator
    screenOptions={{headerShown: false}}
  >
    <RootStack.Screen name="LandingScreen" component={LandingScreen} />
    {/* <RootStack.Screen name="SignUpScreen" component={SignUpScreen} /> */}
    <RootStack.Screen name="HomeScreen" component={HomeScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
