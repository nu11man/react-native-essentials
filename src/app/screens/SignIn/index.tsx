import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

import CustomTextInput from '@components/CustomTextInput';
import { Screens } from '@constants/navigation';
import { MainStackNavigationProps } from '@interfaces/navigation';

import styles from './styles';

type SignInProps = MainStackNavigationProps<Screens.SIGN_IN>;

const SignIn = ({ navigation }: SignInProps) => {
  const { t } = useTranslation();

  const handlePressNavigate = () => navigation.navigate(Screens.HOME);
  const handlePressBack = () => navigation.goBack();

  return (
    <ScrollView bounces={false} contentContainerStyle={styles.screen}>
      <Text style={styles.header}>{t('signIn.header')}</Text>
      <CustomTextInput label="Email" outline />
      <CustomTextInput label="Password" outline />
      <TouchableOpacity style={styles.button} onPress={handlePressNavigate}>
        <Text style={styles.buttonText}>{t('signIn.navigationButtonLabel')}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handlePressBack}>
        <Text style={styles.buttonText}>{t('signIn.backButtonLabel')}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SignIn;
