global.__DEV__ = false;

import '@testing-library/react-native/extend-expect';
import 'react-native-gesture-handler/jestSetup';
import mockRNDeviceInfo from 'react-native-device-info/jest/react-native-device-info-mock';

jest.mock('react-native-device-info', () => mockRNDeviceInfo);

jest.mock('@fortawesome/react-native-fontawesome', () => {
  const React = require('react');
  const IconMock = ({ children, ...props }) => React.createElement('svg', props, children);
  return { FontAwesomeIcon: IconMock };
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native-app-auth', () => {
  authorize: jest.fn();
});

jest.mock('react-native-localize', () => ({
  getLocales: () => [
    { countryCode: 'GB', languageTag: 'en-GB', languageCode: 'en', isRTL: false },
    { countryCode: 'US', languageTag: 'en-US', languageCode: 'en', isRTL: false },
    { countryCode: 'FR', languageTag: 'fr-FR', languageCode: 'fr', isRTL: false }
  ],

  getNumberFormatSettings: () => ({
    decimalSeparator: '.',
    groupingSeparator: ','
  }),

  getCalendar: () => 'gregorian', // or "japanese", "buddhist"
  getCountry: () => 'US', // the country code you want
  getCurrencies: () => ['USD', 'EUR'], // can be empty array
  getTemperatureUnit: () => 'celsius', // or "fahrenheit"
  getTimeZone: () => 'Europe/Paris', // the timezone you want
  uses24HourClock: () => true,
  usesMetricSystem: () => true,

  addEventListener: jest.fn(),
  removeEventListener: jest.fn()
}));

jest.mock('redux-persist', () => ({
  persistStore: jest.fn(),
  persistReducer: jest.fn((config, reducers) => reducers),
  FLUSH: 'persist/FLUSH',
  REHYDRATE: 'persist/REHYDRATE',
  PAUSE: 'persist/PAUSE',
  PERSIST: 'persist/PERSIST',
  PURGE: 'persist/PURGE',
  REGISTER: 'persist/REGISTER'
}));

// include this section and the NativeAnimatedHelper section for mocking react-native-reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});