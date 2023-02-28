import { PressableStateCallbackType, StyleProp, StyleSheet, ViewStyle } from 'react-native';

import { darkGray, gray, lightBackground } from '@constants/colors';
import fonts from '@config/fonts';

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: darkGray
  },
  container: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: lightBackground
  },
  backButton: {
    marginRight: 8,
    borderRadius: 20,
    padding: 4
  },
  headerTitle: {
    ...fonts.bigTitle
  }
});

export const getBackButtonStyle = ({
  pressed
}: PressableStateCallbackType): StyleProp<ViewStyle> => {
  const touchStyle = pressed ? { backgroundColor: gray } : {};
  return [styles.backButton, touchStyle];
};

export default styles;
