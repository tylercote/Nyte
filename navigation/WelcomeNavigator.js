import React from 'react';
import { createStackNavigator } from 'react-navigation';

import ConnectedLoginScreen from '../screens/login/LoginScreen';
import ConnectedBasicInfoScreen from "../screens/login/BasicInfoScreen";
import ConnectedPreferencesScreen from '../screens/login/PreferencesScreen';
import ConnectedAddContactsScreen from "../screens/login/AddContactsScreen";

const WelcomeNavigator = createStackNavigator(
    {
        Login: ConnectedLoginScreen,
        BasicInfo: ConnectedBasicInfoScreen,
        PreferencesInfo: ConnectedPreferencesScreen,
        AddContacts: ConnectedAddContactsScreen
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none',
        headerBackTitleVisible: false
    }
);

export default WelcomeNavigator;

