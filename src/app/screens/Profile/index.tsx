import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomButton from '@components/CustomButton';
import { Screens } from '@constants/navigation';
import { TabStackNavigationProps } from '@interfaces/navigation';
import { signOut } from '@redux/slices/auth';
import { useAppDispatch } from '@redux/hooks';

import styles from './styles';

type ProfileProps = TabStackNavigationProps<Screens.PROFILE>;

const Profile = ({}: ProfileProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [loader, setLoader] = useState(false);

  const handlePress = () => {
    setLoader((prev: boolean) => !prev);
    setTimeout(() => dispatch(signOut()), 2000);
  };

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <ScrollView bounces={false} contentContainerStyle={styles.screen}>
        <Text style={styles.header}>{t('PROFILE.header')}</Text>
        <CustomButton
          style={styles.button}
          title="Sign Out"
          onPress={handlePress}
          loading={loader}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
