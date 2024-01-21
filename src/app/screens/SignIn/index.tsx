import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomButton from '@components/CustomButton';
import CustomTextInput from '@components/CustomTextInput';
import { signIn } from '@redux/slices/auth';
import { useAppDispatch } from '@redux/hooks';

import styles from './styles';

const SignIn = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const handleSignIn = () => {
    setLoading(prev => !prev);
    setTimeout(() => dispatch(signIn()), 2000);
  };

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <ScrollView bounces={false} contentContainerStyle={styles.screen}>
        <Text style={styles.header}>{t('SIGN_IN.header')}</Text>
        <View style={styles.form}>
          <CustomTextInput
            label={t('SIGN_IN.emailLabel')}
            outline
            error={loading ? 'there was an error' : ''}
          />
          <CustomTextInput label={t('SIGN_IN.passwordLabel')} outline secureTextEntry />
          <CustomButton title={t('SIGN_IN.submit')} onPress={handleSignIn} loading={loading} />
        </View>
        {/* <TouchableOpacity style={styles.button} onPress={handlePressNavigate}>
          <Text style={styles.buttonText}>{t('SIGN_IN.navigationButtonLabel')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handlePressBack}>
          <Text style={styles.buttonText}>{t('SIGN_IN.backButtonLabel')}</Text>
        </TouchableOpacity> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
