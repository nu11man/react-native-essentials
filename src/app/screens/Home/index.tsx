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
import { useTranslation } from 'react-i18next';

import { Screens } from '@constants/navigation';
import { TabStackNavigationProps } from '@interfaces/navigation';
import { useAppSelector, useAppDispatch } from '@redux/hooks';
import { getNasaPictureOfTheDay } from '@redux/slices/nasa';

import styles from './styles';

type HomeProps = TabStackNavigationProps<Screens.HOME>;

const Home = ({ navigation }: HomeProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const apodData = useAppSelector(state => state.nasa.nasaApodElement);
  const apodLoading = useAppSelector(state => state.nasa.nasaApodElementLoading);

  const handlePress = () => dispatch(getNasaPictureOfTheDay());
  const handleNavigation = () =>
    navigation.navigate(Screens.SEARCH, { keyword: 'Search from Home' });

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView bounces={false} contentContainerStyle={styles.screen}>
        <View style={styles.fragment}>
          <Text style={styles.header}>{t('home.header')}</Text>
          <Text style={styles.header}>{t('home.subHeader')}</Text>
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
                  <Text style={[styles.sectionTitle, styles.firstSectionTitle]}>
                    {t('home.title')}
                  </Text>
                  <Text style={styles.sectionContent}>{apodData.title}</Text>
                  <Text style={styles.sectionTitle}>{t('home.description')}</Text>
                  <Text style={styles.sectionContent}>{apodData.explanation}</Text>
                  <Text style={styles.sectionTitle}>{t('home.date')}</Text>
                  <Text style={styles.sectionContent}>{apodData.date}</Text>
                  {apodData.copyright && (
                    <View>
                      <Text style={styles.sectionTitle}>{t('home.copyright')}</Text>
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
            <Text style={styles.buttonText}>{t('home.mainButtonLabel')}</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNavigation} disabled={apodLoading}>
          <Text style={styles.buttonText}>{t('home.navigationButtonLabel')}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
