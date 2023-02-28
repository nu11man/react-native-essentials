import { PressableStateCallbackType, StyleProp, StyleSheet, ViewStyle } from 'react-native';

import fonts from '@config/fonts';
import { WINDOW_WIDTH } from '@constants/platform';
import { gray, lightBackground } from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    borderRadius: 14,
    marginBottom: 20,
    justifyContent: 'center',
    backgroundColor: lightBackground
  },
  image: {
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    width: WINDOW_WIDTH - 40,
    height: 200
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12
  },
  title: {
    maxWidth: 280,
    ...fonts.mediumTitle
  }
});

export const getContainerStyles = ({
  pressed
}: PressableStateCallbackType): StyleProp<ViewStyle> => {
  const touchStyle = pressed ? { backgroundColor: gray } : {};
  return [styles.container, touchStyle];
};

export default styles;
