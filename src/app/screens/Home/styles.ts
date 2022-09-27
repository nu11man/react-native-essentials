import { StyleSheet } from 'react-native';

import fonts from '@config/fonts';
import { darkBackground, darkSecondaryBackground } from '@constants/colors';
import { WINDOW_WIDTH } from '@constants/platform';

export default StyleSheet.create({
  safeArea: {
    flexGrow: 1
  },
  screen: {
    alignItems: 'center',
    flexGrow: 1,
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: darkBackground
  },
  fragment: {
    alignItems: 'center'
  },
  header: {
    ...fonts.headerFont
  },
  mainContainer: {
    borderRadius: 14,
    marginTop: 20,
    justifyContent: 'center',
    backgroundColor: darkSecondaryBackground
  },
  image: {
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    width: WINDOW_WIDTH - 40,
    height: 200
  },
  descriptionContainer: {
    padding: 20
  },
  contentContainer: {
    justifyContent: 'center'
  },
  sectionTitle: {
    ...fonts.titleFont,
    marginTop: 13,
    marginBottom: 5
  },
  firstSectionTitle: {
    marginTop: 0
  },
  sectionContent: {
    ...fonts.paragraphFont
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
