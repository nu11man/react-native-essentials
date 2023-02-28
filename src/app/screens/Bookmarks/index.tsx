import React from 'react';
import { ScrollView, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Screens } from '@constants/navigation';
import { TabStackNavigationProps } from '@interfaces/navigation';

import styles from './styles';

type BookmarsProps = TabStackNavigationProps<Screens.BOOKMARKS>;

const Bookmarks = ({}: BookmarsProps) => {
  const { t } = useTranslation();

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <ScrollView bounces={false} contentContainerStyle={[styles.screen]}>
        <Text style={styles.header}>{t('BOOKMARKS.header')}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bookmarks;
