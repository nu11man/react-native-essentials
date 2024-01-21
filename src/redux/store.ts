import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
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
import Reactotron from '@config/reactotronConfig';

import counterReducer from './slices/counter';
import nasaReducer from './slices/nasa';
import authReducer from './slices/auth';
import { nasaApi } from './api/nasa';

const reduxEnhacers: any[] = [];
if (__DEV__) reduxEnhacers.push(Reactotron.createEnhancer!());

const rootReducer = combineReducers({
  counter: counterReducer,
  nasa: nasaReducer,
  auth: authReducer,
  [nasaApi.reducerPath]: nasaApi.reducer
});

const persistConfig = {
  key: 'root',
  storage: reduxStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = (preloadedState?: PreloadedState<RootStateType>) => {
  return configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        },
        immutableCheck: { warnAfter: 128 }
      }).concat(nasaApi.middleware),
    enhancers: reduxEnhacers,
    preloadedState
  });
};

const store = setupStore();

export const persistor = persistStore(store);
export type RootStateType = ReturnType<typeof rootReducer>;
export type AppStoreType = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
export default store;
