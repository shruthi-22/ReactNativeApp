import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {Home} from '../features/home/Home';
import {Contacts} from '../features/contacts/Contacts';
import {MyTrips} from '../features/trips/MyTrips';
import {MoneyTransfer} from '../features/transfer/MoneyTransfer';
import {icons} from '../styles/icons';
import {Books} from '../features/books/Books';

const Tab = createBottomTabNavigator();

const HomeScreen = ({}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
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
        headerShown: route.name == 'Transfer' ? false : true,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen name="My Trips" component={MyTrips} />
      <Tab.Screen name="Transfer" component={MoneyTransfer} />
      <Tab.Screen name="Books" component={Books} />
    </Tab.Navigator>
  );
};

export default HomeScreen;



