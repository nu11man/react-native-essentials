import { StyleSheet } from 'react-native';

import fonts from '@config/fonts';
import { darkBackground, darkGray } from '@constants/colors';

export default StyleSheet.create({
  safeArea: {
    flexGrow: 1,
    backgroundColor: darkGray
  },
  screen: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    padding: 20,
    backgroundColor: darkBackground
  },
  header: {
    ...fonts.headerFont
  }
});
