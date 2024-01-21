import React, { useRef } from 'react';
import {
  ViewStyle,
  TextStyle,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  LayoutChangeEvent
} from 'react-native';

import { colors } from '@constants/colors';
import fonts from '@config/fonts';
import { SIZES } from '@constants/fonts';

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  secondary?: boolean;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  activityIndicatorStyle?: ViewStyle;
}

const CustomButton = ({
  title,
  disabled,
  loading,
  onPress,
  style,
  textStyle,
  secondary,
  activityIndicatorStyle
}: CustomButtonProps) => {
  const size = useRef({ width: 0, height: 0 });

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    if (size.current.height == 0) size.current = { width, height };
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLayout={handleLayout}
      disabled={disabled}
      style={[
        styles.container,
        secondary ? styles.secondaryButton : styles.primaryButton,
        !!size.current.height && { width: size.current.width, height: size.current.height },
        disabled && styles.containerDisabled,
        style
      ]}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={secondary ? '#6200EE' : '#FFF'}
          style={[styles.activityIndicator, activityIndicatorStyle]}
        />
      ) : (
        <Text
          style={[
            styles.title,
            secondary && styles.secondaryButtonText,
            disabled && styles.textDisabled,
            textStyle
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 3,
    alignSelf: 'flex-end',
    borderColor: colors.violet.secondary
  },
  primaryButton: {
    backgroundColor: colors.violet.secondary
  },
  secondaryButton: {
    backgroundColor: colors.solid.white
  },
  title: {
    ...fonts.semiBoldFont,
    fontSize: SIZES.XMEDIUM,
    color: colors.solid.white
  },
  secondaryButtonText: {
    color: colors.violet.primary
  },
  containerDisabled: {
    backgroundColor: '#999'
  },
  textDisabled: {
    color: '#696969'
  },
  activityIndicator: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto'
  }
});

export default CustomButton;
