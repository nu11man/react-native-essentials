import React from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import FastImage from 'react-native-fast-image';

import { useAppSelector, useAppDispatch } from '@redux/hooks';
import { getNasaPictureOfTheDay } from '@redux/slices/nasa';

import styles from './styles';

const Home = () => {
  const dispatch = useAppDispatch();
  const apodData = useAppSelector(state => state.nasa.nasaApodElement);
  const apodLoading = useAppSelector(state => state.nasa.nasaApodElementLoading);
  const handlePress = () => dispatch(getNasaPictureOfTheDay());
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView bounces={false} contentContainerStyle={styles.screen}>
        <View style={styles.fragment}>
          <Text style={styles.header}>Astronomy Picture of the Day</Text>
          <Text style={styles.header}>NASA API</Text>
          {apodData && (
            <View style={styles.mainContainer}>
              <FastImage
                style={styles.image}
                source={{
                  uri: apodData.url,
                  priority: FastImage.priority.normal
                }}
                resizeMode={FastImage.resizeMode.stretch}
              />
              <View style={styles.contentContainer}>
                <View style={styles.descriptionContainer}>
                  <Text style={[styles.sectionTitle, styles.firstSectionTitle]}>Title</Text>
                  <Text style={styles.sectionContent}>{apodData.title}</Text>
                  <Text style={styles.sectionTitle}>Description</Text>
                  <Text style={styles.sectionContent}>{apodData.explanation}</Text>
                  <Text style={styles.sectionTitle}>Date</Text>
                  <Text style={styles.sectionContent}>{apodData.date}</Text>
                  {apodData.copyright && (
                    <View>
                      <Text style={styles.sectionTitle}>Copyright</Text>
                      <Text style={styles.sectionContent}>{apodData.copyright}</Text>
                    </View>
                  )}
                </View>
              </View>
            </View>
          )}
        </View>
        <TouchableOpacity style={styles.button} onPress={handlePress} disabled={apodLoading}>
          {apodLoading ? (
            <ActivityIndicator size="small" />
          ) : (
            <Text style={styles.buttonText}>Next Picture</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
