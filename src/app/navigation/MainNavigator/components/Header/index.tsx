import { useTranslation } from 'react-i18next';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { getHeaderTitle } from '@react-navigation/elements';
import { View, Text, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { SafeAreaView } from 'react-native-safe-area-context';

import { lightGray } from '@constants/colors';

import styles, { getBackButtonStyle } from './styles';

interface HeaderProps extends NativeStackHeaderProps {}

const Header = ({ navigation, route, options }: HeaderProps) => {
  const { t } = useTranslation();
  const screenName = getHeaderTitle(options, route.name);
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.container}>
        <Pressable onPress={navigation.goBack} style={getBackButtonStyle}>
          <FontAwesomeIcon size={20} icon={faArrowLeft} color={lightGray} />
        </Pressable>
        <Text style={styles.headerTitle}>{t(`navigation.headers.${screenName}`)}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;
