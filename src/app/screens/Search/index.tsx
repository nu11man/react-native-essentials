import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Screens } from '@constants/navigation';
import { MainStackNavigationProps } from '@interfaces/navigation';

import styles from './styles';

type SearchProps = MainStackNavigationProps<Screens.SEARCH>;

const Search = ({ navigation }: SearchProps) => {
  const { t } = useTranslation();

  const handlePressNavigate = () =>
    navigation.navigate(Screens.DETAIL, { name: 'Name for Detail screen' });
  const handlePressBack = () => navigation.goBack();

  return (
    <ScrollView bounces={false} contentContainerStyle={styles.screen}>
      <Text style={styles.header}>{t('search.header')}</Text>
      <TouchableOpacity style={styles.button} onPress={handlePressNavigate}>
        <Text style={styles.buttonText}>{t('search.navigationButtonLabel')}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handlePressBack}>
        <Text style={styles.buttonText}>{t('search.backButtonLabel')}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Search;
