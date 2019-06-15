import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthLoadingScreen from '../screens/login/AuthLoadingScreen';
import MainTabNavigator from './MainTabNavigator';
import WelcomeNavigator from './WelcomeNavigator';

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Welcome: WelcomeNavigator,
      Main: MainTabNavigator
    },
    {
      initialRouteName: 'Main'
    }
  )
);
