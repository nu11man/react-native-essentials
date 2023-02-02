import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Screens } from '@constants/navigation';

export type TabStackParamList = {
  [Screens.HOME]: undefined;
  [Screens.PROFILE]: undefined;
  [Screens.SETTINGS]: undefined;
};

export type MainStackParamList = {
  [Screens.MAIN]: NavigatorScreenParams<TabStackParamList>;
  [Screens.SIGN_IN]: undefined;
  [Screens.SIGN_UP]: undefined;
  [Screens.DETAIL]: { name: string };
  [Screens.SEARCH]: { keyword: string };
};

export type TabStackNavigationProps<RouteName extends keyof TabStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<TabStackParamList, RouteName>,
    NativeStackScreenProps<MainStackParamList>
  >;

export type MainStackNavigationProps<RouteName extends keyof MainStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<MainStackParamList, RouteName>,
    BottomTabScreenProps<TabStackParamList>
  >;
