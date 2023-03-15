module.exports = {
  preset: 'react-native',
  setupFiles: ['./jestSetup.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect']
};
