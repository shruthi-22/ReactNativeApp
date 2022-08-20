/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackScreen from './src/screens/RootStackScreen';
import {PersistGate} from 'redux-persist/integration/react';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import {Provider} from 'react-redux';
import {store, persistor} from './src/app/store';

const App = ()  => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TailwindProvider utilities={utilities}>
          <NavigationContainer>
            <RootStackScreen />
          </NavigationContainer>
        </TailwindProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
