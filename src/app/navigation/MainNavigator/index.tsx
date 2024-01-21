import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useAppSelector } from '@redux/hooks';
import { Screens } from '@constants/navigation';
import { TabStackParamList, MainStackParamList } from '@interfaces/navigation';
import Bookmarks from '@screens/Bookmarks';
import Detail from '@screens/Detail';
import Home from '@screens/Home';
import Profile from '@screens/Profile';
import SignIn from '@screens/SignIn';
import SignUp from '@screens/SignUp';

import Header from './components/Header';
import NavigationBar from './components/NavigationBar';

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={props => <NavigationBar {...props} />}
    >
      <Tab.Screen name={Screens.HOME} component={Home} />
      <Tab.Screen name={Screens.BOOKMARKS} component={Bookmarks} />
      <Tab.Screen name={Screens.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

const AppStack = createNativeStackNavigator<MainStackParamList>();

const AppNavigator = () => {
  const isUserAuth = useAppSelector(state => state.auth.isLoggedIn);
  return (
    <AppStack.Navigator>
      {isUserAuth ? (
        <AppStack.Group screenOptions={{ header: props => <Header {...props} /> }}>
          <AppStack.Screen
            name={Screens.MAIN}
            component={TabStack}
            options={{ headerShown: false }}
          />
          <AppStack.Screen name={Screens.DETAIL} component={Detail} />
        </AppStack.Group>
      ) : (
        <AppStack.Group screenOptions={{ headerShown: false }}>
          <AppStack.Screen name={Screens.SIGN_IN} component={SignIn} />
          <AppStack.Screen name={Screens.SIGN_UP} component={SignUp} />
        </AppStack.Group>
      )}
    </AppStack.Navigator>
  );
};

export default AppNavigator;
