import { StyleSheet } from 'react-native';

import fonts from '@config/fonts';
import { colors, darkBackground, lightBackground } from '@constants/colors';

export default StyleSheet.create({
  safeArea: {
    backgroundColor: colors.gray.dark,
    flexGrow: 1
  },
  screen: {
    alignItems: 'center',
    flexGrow: 1,
    padding: 20,
    backgroundColor: colors.solid.white
  },
  header: {
    ...fonts.headerFont,
    color: colors.violet.primary
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginTop: 40,
    alignItems: 'center',
    backgroundColor: lightBackground,
    borderRadius: 14,
    minWidth: 120
  },
  buttonText: {
    ...fonts.titleFont
  },
  form: {
    marginTop: 100
  }
});
