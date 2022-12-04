import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Screens } from '@app/navigation/constants';
import { MainStackNavigationProps } from '@app/navigation/types';

import styles from './styles';

type SignUpProps = MainStackNavigationProps<Screens.SIGN_UP>;

const SignUp = ({ navigation }: SignUpProps) => {
  const { t } = useTranslation();

  const handlePressNavigate = () => navigation.navigate(Screens.HOME);
  const handlePressBack = () => navigation.goBack();

  return (
    <ScrollView bounces={false} contentContainerStyle={styles.screen}>
      <Text style={styles.header}>{t('signUp.header')}</Text>
      <TouchableOpacity style={styles.button} onPress={handlePressNavigate}>
        <Text style={styles.buttonText}>{t('signUp.navigationButtonLabel')}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handlePressBack}>
        <Text style={styles.buttonText}>{t('signUp.backButtonLabel')}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SignUp;
