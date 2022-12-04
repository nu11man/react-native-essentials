import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from '@redux/store';
import AppNavigator from '@app/navigation/MainNavigator';
import { SetupApi } from '@config/appSetup';

import './src/config';

const App = () => {

  useEffect(() => {
    SetupApi();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
