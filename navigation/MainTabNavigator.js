// import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createBottomTabNavigator } from 'react-navigation';
import ConnectedMapScreen from '../screens/MapScreen';
import ConnectedFriendsScreen from '../screens/FriendsScreen';
import ConnectedProfileScreen from '../screens/ProfileScreen';

const bottomTabNavigatorConfig = {
  shifting: true,
  backBehavior: 'none',
  activeColor: 'white',
  inactiveColor: 'red',
  barStyle: {
    backgroundColor: 'black',
    marginBottom: -15
  },
  initialRouteName: 'ConnectedMapScreen'
};

export default createBottomTabNavigator(
  {
    ConnectedMapScreen,
    ConnectedFriendsScreen,
    ConnectedProfileScreen
  },
  bottomTabNavigatorConfig
);
