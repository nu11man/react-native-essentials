import { View, Text, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { lightGray, white } from '@constants/colors';

import TAB_ICONS from './constants';
import styles, { getTabButtonStyle } from './styles';
import TabBarIconsType from './types';

const NavigationBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const { t } = useTranslation();
  const { bottom: safeAreaInset } = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          });

          if (!isFocused && !event.defaultPrevented)
            navigation.navigate({ name: route.name, params: { merge: true } });
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key
          });
        };

        return (
          <Pressable
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={({ pressed }) => getTabButtonStyle(pressed, safeAreaInset)}
          >
            <FontAwesomeIcon
              size={24}
              icon={TAB_ICONS[route.name as keyof TabBarIconsType]}
              color={isFocused ? white : lightGray}
            />
            <Text style={[styles.label, { color: isFocused ? white : lightGray }]}>
              {t(`navigation.navbar.${route.name}`)}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default NavigationBar;
