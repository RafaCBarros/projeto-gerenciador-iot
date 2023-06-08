import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScrene from '../screens/WelcomeScreen/WelcomeScreen.js';
import SingInScrene from '../screens/SingInScreen/SingInScreen.js';
import SingUpScrene from '../screens/SingUpScreen/SingUpScreen.js';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen.js';
import HomeScreen from '../screens/HomeScreen/HomeScreen.js';

import NewDeviceScreen from '../screens/NewDeviceScreen/NewDeviceScreen.js';
import DeviceScreen from '../screens/DeviceScreen/DeviceScreen.js';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScrene} />
        <Stack.Screen name="SingIn" component={SingInScrene} />
        <Stack.Screen name="SingUp" component={SingUpScrene} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerBackTitleVisible: false}}
        />
        <Stack.Screen name="NewDevice" component={NewDeviceScreen} />
        <Stack.Screen name="DeviceDetail" component={DeviceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
