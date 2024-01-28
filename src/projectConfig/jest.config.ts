import type { Config } from 'jest';
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

const jestConfig: Config = {
  preset: 'react-native',
  modulePaths: ['<rootDir>'],
  setupFilesAfterEnv: ['./jest/jestSetup.js'],
  moduleNameMapper: {
    '^image![a-zA-Z0-9$_-]+$': 'GlobalImageStub',
    '^[@./a-zA-Z0-9$_-]+\\.(png|gif)$':
      '<rootDir>/node_modules/react-native/Libraries/Image/RelativeImageStub',
    ...pathsToModuleNameMapper(compilerOptions.paths)
  },

  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
    '^.+\\.(ts|tsx)?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
        diagnostics: false,
        babelConfig: true
      }
    ]
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?|(react-i18next)?|(@react-native-masked-view/masked-view)|(@gorhom/bottom-sheet))/)'
  ],


  coverageThreshold: {
    global: {
      functions: 80
    }
  },

  collectCoverageFrom: [
    'src/app/hooks/**/*.{js,ts,jsx,tsx}',
    'src/app/screens/**/*.{js,ts,jsx,tsx}',
    'src/components/{atoms,molecules,organisms,wrappers}/**/*.{js,jsx}',
    'src/components/{atoms,molecules,organisms,wrappers}/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!src/**/*.stories.*'
  ],
  coverageReporters: ['json', 'text', 'text-summary']
};

export default jestConfig;
