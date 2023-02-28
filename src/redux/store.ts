import Reactotron from '@config/reactotronConfig';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';

import { reduxStorage } from '@config/storage';

import counterReducer from './slices/counter';
import nasaReducer from './slices/nasa';
import { nasaApi } from './apis/nasa';

const reduxEnhacers = [];
if (__DEV__) reduxEnhacers.push(Reactotron.createEnhancer!());

const rootReducer = combineReducers({
  counter: counterReducer,
  nasa: nasaReducer,
  [nasaApi.reducerPath]: nasaApi.reducer
});

const persistConfig = {
  key: 'root',
  storage: reduxStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(nasaApi.middleware),
  enhancers: reduxEnhacers
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
