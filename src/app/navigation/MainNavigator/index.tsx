import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Screens } from '@constants/navigation';
import { TabStackParamList, MainStackParamList } from '@interfaces/navigation';
import Home from '@screens/Home';
import Profile from '@screens/Profile';
import Settings from '@screens/Settings';
import SignIn from '@screens/SignIn';
import SignUp from '@screens/SignUp';
import Search from '@screens/Search';
import Detail from '@screens/Detail';

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
