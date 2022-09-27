module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
          '@mocks': './__mocks__',
          '@tests': './__tests__',
          '@app': './src/app',
          '@assets': './src/app/assets',
          '@components': './src/app/components',
          '@hooks': './src/app/hooks',
          '@screens': './src/app/screens',
          '@config': './src/config',
          '@constants': './src/constants',
          '@interfaces': './src/interfaces',
          '@lottieAssets': './src/lottieAssets',
          '@redux': './src/redux',
          '@services': './src/services',
          '@utils': './src/utils'
        }
      }
    ],
    'react-native-reanimated/plugin'
  ]
};
