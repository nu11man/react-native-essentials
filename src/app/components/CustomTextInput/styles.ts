import { StyleSheet } from 'react-native';

import { colors } from '@constants/colors';
import fonts from '@config/fonts';

export const styles = StyleSheet.create({
  container: {
    minWidth: '100%',
    marginBottom: 30
  },
  error: {
    ...fonts.labelText,
    color: colors.red.primary
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4
  },
  errorIcon: {
    marginRight: 8
  },
  label: {
    backgroundColor: colors.solid.white,
    position: 'absolute',
    color: '#aaa'
  },
  outlineLabel: {
    marginLeft: 11,
    paddingHorizontal: 4
  },
  activeLabel: {
    color: '#3f51b5'
  },
  input: {
    paddingVertical: 15,
    borderColor: '#ccc'
  },
  outlineInput: {
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 6
  },
  outlineActiveInput: {
    borderWidth: 2,
    borderColor: '#3f51b5'
  },
  singleLineInput: {
    borderBottomWidth: 1
  },
  singleLineActiveInput: {
    borderBottomWidth: 2,
    borderColor: '#3f51b5'
  }
});
