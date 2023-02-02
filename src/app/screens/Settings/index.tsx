import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Screens } from '@constants/navigation';
import { TabStackNavigationProps } from '@interfaces/navigation';

import styles from './styles';

type SettingsProps = TabStackNavigationProps<Screens.SETTINGS>;

const Settings = ({ navigation }: SettingsProps) => {
  const { t } = useTranslation();

  const handlePressNavigate = () =>
    navigation.navigate(Screens.SEARCH, { keyword: 'Search from settings' });
  const handlePressBack = () => navigation.goBack();

  return (
    <ScrollView bounces={false} contentContainerStyle={styles.screen}>
      <Text style={styles.header}>{t('settings.header')}</Text>
      <TouchableOpacity style={styles.button} onPress={handlePressNavigate}>
        <Text style={styles.buttonText}>{t('settings.navigationButtonLabel')}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handlePressBack}>
        <Text style={styles.buttonText}>{t('settings.backButtonLabel')}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Settings;
