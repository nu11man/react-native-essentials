import { StyleSheet } from 'react-native';

import fonts from '@config/fonts';
import { darkBackground, darkGray } from '@constants/colors';

export default StyleSheet.create({
  safeArea: {
    backgroundColor: darkGray,
    flexGrow: 1
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    backgroundColor: darkBackground
  },
  fragment: {
    alignItems: 'center',
    marginVertical: 20
  },
  header: {
    ...fonts.headerFont
  }
});
