/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';
import {TailwindProvider} from 'tailwind-rn';
import { Provider } from 'react-redux';
import utilities from './tailwind.json';

import { MainScreen } from './src/screens/MainScreen';
// import {store, persistor} from './src-old/app/store';

const App = ()  => {
  return (
    // <Provider store={store}>
      // <PersistGate loading={null} persistor={persistor}>
        <TailwindProvider utilities={utilities}>
          <NavigationContainer>
            <MainScreen />
          </NavigationContainer>
        </TailwindProvider>
      // </PersistGate>
    // </Provider>
  );
};

export default App;
