global.__DEV__ = false;
jest.mock('@fortawesome/react-native-fontawesome', () => {
  const React = require('react');
  const IconMock = ({ children, ...props }) => React.createElement('svg', props, children);
  return { FontAwesomeIcon: IconMock };
});

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
