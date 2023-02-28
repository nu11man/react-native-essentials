import React from 'react';
import { View, Text, Pressable, ViewStyle } from 'react-native';
import FastImage from 'react-native-fast-image';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { lightGray } from '@constants/colors';

import styles, { getContainerStyles } from './styles';

interface DataCardProps {
  title: string;
  imageURL: string;
  onPress: () => void;
  style?: ViewStyle;
}

const DataCard = ({ title, imageURL, onPress }: DataCardProps) => {
  return (
    <Pressable style={getContainerStyles} onPress={onPress}>
      <FastImage
        style={styles.image}
        source={{
          uri: imageURL,
          priority: FastImage.priority.normal
        }}
        resizeMode={FastImage.resizeMode.stretch}
      />
      <View style={styles.titleContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <FontAwesomeIcon icon={faChevronRight} color={lightGray} />
      </View>
    </Pressable>
  );
};

export default DataCard;
