import React from 'react';
import { Text, Platform, StyleSheet } from 'react-native';
import { Animated, Easing, View, RefreshControl } from 'react-native';
import TabBarIcon from '../components/TabBarIcon';
import Styles from '../constants/Styles';
import { __retrieveData } from '../services/LocalStorage';
import { connect } from 'react-redux';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class MapScreen extends React.Component {
  static navigationOptions = () => {
    return {
      tabBarOnPress({ navigation, defaultHandler }) {
        // Haptic.impact(Haptic.ImpactFeedbackStyle.Heavy);
        defaultHandler();
      },
      tabBarLabel: 'Map',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          name={Platform.OS === 'ios' ? 'ios-pin' : 'ios-pin'}
          size={30}
          style={Styles.tabBarIcon}
          color={'white'}
        />
      ),
      tabBarColor: '#092327'
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      mapLoading: true
    };
  }

  componentDidMount() {}

  componentWillUnmount() {
    console.log('Unmounting map view');
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

const ConnectedMapScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  map: {
    flex: 1
  }
});

export default MapScreen;
