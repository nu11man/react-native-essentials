import { StyleSheet } from 'react-native';

import fonts from '@config/fonts';
import { darkBackground, lightBackground } from '@constants/colors';
import { WINDOW_WIDTH } from '@constants/platform';

export default StyleSheet.create({
  screen: {
    alignItems: 'center',
    flexGrow: 1,
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: darkBackground
  },
  mainContainer: {
    borderRadius: 14,
    justifyContent: 'center',
    backgroundColor: lightBackground
  },
  image: {
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    width: WINDOW_WIDTH - 40,
    height: 200
  },
  contentContainer: {
    justifyContent: 'center'
  },
  descriptionContainer: {
    padding: 20
  },
  sectionTitle: {
    ...fonts.mediumTitle,
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
    backgroundColor: lightBackground,
    borderRadius: 14,
    minWidth: 120
  },
  buttonText: {
    ...fonts.titleFont
  }
});
