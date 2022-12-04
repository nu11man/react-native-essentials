import { StyleSheet } from 'react-native';

import fonts from '@config/fonts';
import { darkBackground, darkSecondaryBackground } from '@constants/colors';

export default StyleSheet.create({
  screen: {
    alignItems: 'center',
    flexGrow: 1,
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: darkBackground
  },
  header: {
    ...fonts.headerFont
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginTop: 40,
    alignItems: 'center',
    backgroundColor: darkSecondaryBackground,
    borderRadius: 14,
    minWidth: 120
  },
  buttonText: {
    ...fonts.titleFont
  }
});
