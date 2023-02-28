import React from 'react';
import { ViewStyle, Pressable } from 'react-native';

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  primary?: boolean;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
}

const CustomButton = ({ title, disabled, loading, onPress, style, primary }: CustomButtonProps) => {
  return (
    
  );
};

export default CustomButton;
