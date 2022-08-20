import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import contactsReducer from '../features/contacts/contactSlice';
import booksReducer from '../features/books/bookSlice'
import { createLogger } from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const logger = createLogger();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
//   whitelist: ['contacts'],
};


export const store = configureStore({
  reducer: {
    phoneBook: persistReducer(persistConfig, contactsReducer),
    library: persistReducer(persistConfig, booksReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

export const persistor = persistStore(store);