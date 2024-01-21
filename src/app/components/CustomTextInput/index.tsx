import React, { useState, useRef } from 'react';
import { TextInput, Text, View, ViewStyle, TextInputProps } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

import { colors } from '@constants/colors';

import { styles } from './styles';

interface CustomTextInputProps extends TextInputProps {
  label?: string;
  error?: string;
  outline?: boolean;
  style?: ViewStyle;
}

const CustomTextInput = ({
  label,
  error,
  outline = true,
  style,
  ...textProps
}: CustomTextInputProps) => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const textInputRef = useRef(null);
  const position = useSharedValue(18);
  const labelStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: withTiming(position.value, { duration: 200 }) }]
  }));
  const handleFocus = () => {
    setIsFocused(true);
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
    position.value = -8;
  };
  const handleBlur = () => {
    setIsFocused(false);
    if (!value) {
      position.value = 18;
    }
  };
  return (
    <View style={[styles.container, style]}>
      <TextInput
        {...textProps}
        ref={textInputRef}
        style={[
          styles.input,
          outline ? styles.outlineInput : styles.singleLineInput,
          isFocused ? (outline ? styles.outlineActiveInput : styles.singleLineActiveInput) : {}
        ]}
        value={value}
        autoFocus={false}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={setValue}
      />
      {error && (
        <View style={styles.errorContainer}>
          <FontAwesomeIcon
            size={14}
            icon={faTriangleExclamation}
            color={colors.red.primary}
            style={styles.errorIcon}
          />
          <Text style={styles.error}>{error}</Text>
        </View>
      )}
      <Animated.Text
        style={[
          styles.label,
          isFocused && styles.activeLabel,
          outline && styles.outlineLabel,
          labelStyle
        ]}
        onPress={handleFocus}
      >
        {label}
      </Animated.Text>
    </View>
  );
};

export default CustomTextInput;
