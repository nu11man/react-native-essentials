import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Screens } from '@constants/navigation';
import { MainStackNavigationProps } from '@interfaces/navigation';

import styles from './styles';

type DetailProps = MainStackNavigationProps<Screens.DETAIL>;

const Detail = ({ navigation }: DetailProps) => {
  const { t } = useTranslation();

  const handlePressNavigate = () => navigation.navigate(Screens.HOME);
  const handlePressBack = () => navigation.goBack();

  return (
    <ScrollView bounces={false} contentContainerStyle={styles.screen}>
      <Text style={styles.header}>{t('detail.header')}</Text>
      <TouchableOpacity style={styles.button} onPress={handlePressNavigate}>
        <Text style={styles.buttonText}>{t('detail.navigationButtonLabel')}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handlePressBack}>
        <Text style={styles.buttonText}>{t('detail.backButtonLabel')}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Detail;
