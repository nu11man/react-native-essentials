import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from '@redux/store';
import Home from '@screens/Home';
import { SetupApi } from '@config/appSetup';

import './src/config';

const App = () => {
  useEffect(() => {
    SetupApi();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  );
};

export default App;
