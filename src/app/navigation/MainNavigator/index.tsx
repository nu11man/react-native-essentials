import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '@app/screens/Home';
import Profile from '@app/screens/Profile';
import Settings from '@app/screens/Settings';
import SignIn from '@app/screens/SignIn';
import SignUp from '@app/screens/SignUp';
import Search from '@app/screens/Search';
import Detail from '@app/screens/Detail';

import { TabStackParamList, MainStackParamList } from '../types';
import { Screens } from '../constants';

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabStack = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name={Screens.HOME} component={Home} />
      <Tab.Screen name={Screens.PROFILE} component={Profile} />
      <Tab.Screen name={Screens.SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
};

const AppStack = createNativeStackNavigator<MainStackParamList>();

const AppNavigator = () => {
  const isUserAuth = true;
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      {isUserAuth ? (
        <AppStack.Group>
          <AppStack.Screen name={Screens.MAIN} component={TabStack} />
          <AppStack.Screen name={Screens.DETAIL} component={Detail} />
          <AppStack.Screen name={Screens.SEARCH} component={Search} />
        </AppStack.Group>
      ) : (
        <AppStack.Group>
          <AppStack.Screen name={Screens.SIGN_IN} component={SignIn} />
          <AppStack.Screen name={Screens.SIGN_UP} component={SignUp} />
        </AppStack.Group>
      )}
    </AppStack.Navigator>
  );
};

export default AppNavigator;
