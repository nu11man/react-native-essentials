import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Screens } from '@constants/navigation';
import { MainStackNavigationProps } from '@interfaces/navigation';
import { useGetApodItemsQuery } from '@redux/apis/nasa';

import styles from './styles';
import { darkBackground } from '@constants/colors';

type DetailProps = MainStackNavigationProps<Screens.DETAIL>;

const Detail = ({ route }: DetailProps) => {
  const { t } = useTranslation();
  const { bottom } = useSafeAreaInsets();
  const apodId = route.params.apodId;
  const { data: astronomyElement } = useGetApodItemsQuery(undefined, {
    selectFromResult: ({ data }) => ({ data: data?.filter(item => item.id === apodId)[0] })
  });

  return (
    <ScrollView
      contentContainerStyle={[styles.screen, { paddingBottom: Math.max(bottom, 20) }]}
      style={{ backgroundColor: darkBackground }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.mainContainer}>
        <FastImage
          style={styles.image}
          source={{
            uri: astronomyElement?.url,
            priority: FastImage.priority.normal
          }}
          resizeMode={FastImage.resizeMode.stretch}
        />
        <View style={styles.contentContainer}>
          <View style={styles.descriptionContainer}>
            <Text style={[styles.sectionTitle, styles.firstSectionTitle]}>{t('DETAIL.title')}</Text>
            <Text style={styles.sectionContent}>{astronomyElement?.title}</Text>
            <Text style={styles.sectionTitle}>{t('DETAIL.description')}</Text>
            <Text style={styles.sectionContent}>{astronomyElement?.explanation}</Text>
            <Text style={styles.sectionTitle}>{t('DETAIL.date')}</Text>
            <Text style={styles.sectionContent}>{astronomyElement?.date}</Text>
            {astronomyElement?.copyright && (
              <View>
                <Text style={styles.sectionTitle}>{t('DETAIL.copyright')}</Text>
                <Text style={styles.sectionContent}>{astronomyElement?.copyright}</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Detail;
