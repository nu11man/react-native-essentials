import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 30
  },
  label: {
    position: 'absolute',
    color: '#aaa'
    // backgroundColor: 'white'
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
