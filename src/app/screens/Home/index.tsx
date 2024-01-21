import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, FlatList, ListRenderItem, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import DataCard from '@components/DataCard';
import CustomButton from '@components/CustomButton';
import { white } from '@constants/colors';
import { Screens } from '@constants/navigation';
import { TabStackNavigationProps } from '@interfaces/navigation';
import { NasaApodElement } from '@interfaces/nasa';
import { ListKeyExtractor } from '@interfaces/globalInterfaces';
import { useGetApodItemsQuery } from '@redux/api/nasa';
import { signOut } from '@redux/slices/auth';
import { useAppDispatch } from '@redux/hooks';

import styles from './styles';

type HomeProps = TabStackNavigationProps<Screens.HOME>;

const Home = ({ navigation }: HomeProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [loader, setLoader] = useState(false);
  const { data, isFetching, refetch } = useGetApodItemsQuery(undefined);

  const handleApodPress = (apodId: string) => {
    navigation.navigate(Screens.DETAIL, { apodId });
  };

  const keyExtractor: ListKeyExtractor<NasaApodElement> = (item, index) => {
    return `${item.date}${index}`;
  };

  const renderItem: ListRenderItem<NasaApodElement> = ({ item: { title, url, id } }) => {
    return <DataCard onPress={() => handleApodPress(id)} title={title} imageURL={url} />;
  };

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.screen}>
        <FlatList<NasaApodElement>
          data={data}
          ListHeaderComponent={() => (
            <View style={styles.fragment}>
              <Text style={styles.header}>{t('HOME.header')}</Text>
              <Text style={styles.header}>{t('HOME.subHeader')}</Text>
            </View>
          )}
          refreshControl={
            <RefreshControl
              refreshing={isFetching}
              onRefresh={refetch}
              tintColor={white}
              progressBackgroundColor={white}
            />
          }
          bounces={true}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
        />
        <CustomButton
          title="Sign Out"
          onPress={() => {
            setLoader(prev => !prev);
            setTimeout(() => dispatch(signOut()), 2000);
          }}
          loading={loader}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
