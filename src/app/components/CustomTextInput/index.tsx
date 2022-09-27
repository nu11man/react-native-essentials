import React, {useState} from 'react';
import {TextInput, Text, View, StyleSheet, ViewStyle} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { styles } from './styles';

interface CustomTextInputProps {
  label?: string;
  outline?: boolean;
  style?: ViewStyle;
}

const CustomTextInput = ({label, outline = true, style}: CustomTextInputProps) => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const position = useSharedValue(18);
  const labelStyle = useAnimatedStyle(() => ({
    transform: [{translateY: withTiming(position.value, {duration: 200})}],
  }));
  const handleFocus = () => {
    setIsFocused(true);
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
        style={[
          styles.input,
          outline ? styles.outlineInput : styles.singleLineInput,
          isFocused
            ? outline
              ? styles.outlineActiveInput
              : styles.singleLineActiveInput
            : {},
        ]}
        value={value}
        autoFocus={false}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={text => setValue(text)}
      />
      <Animated.Text
        style={[
          styles.label,
          isFocused && styles.activeLabel,
          outline && styles.outlineLabel,
          labelStyle,
        ]}>
        {label}
      </Animated.Text>
    </View>
  );
};

export default CustomTextInput;
