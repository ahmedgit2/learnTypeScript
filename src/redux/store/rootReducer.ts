import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
import {userReducer, langReducer} from '../slices/index';
import {persistReducer} from 'redux-persist';

const rootReducer = combineReducers({
  user: userReducer,
  lang: langReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['lang', 'user'],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
