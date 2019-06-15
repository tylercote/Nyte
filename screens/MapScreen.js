import React from 'react';
import { Text, Platform, StyleSheet } from 'react-native';
import { Animated, Easing, View, RefreshControl } from 'react-native';
import TabBarIcon from '../components/TabBarIcon';
import Styles from '../constants/Styles';
import { __retrieveData } from '../services/LocalStorage';
import { connect } from 'react-redux';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { startLoginToFacebook } from '../actions';
import { fetchDestinations } from '../actions';

const mapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#212121'
      }
    ]
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575'
      }
    ]
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#212121'
      }
    ]
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        color: '#757575'
      }
    ]
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e'
      }
    ]
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575'
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#181818'
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161'
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1b1b1b'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#2c2c2c'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8a8a8a'
      }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#373737'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#3c3c3c'
      }
    ]
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#4e4e4e'
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161'
      }
    ]
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#3d3d3d'
      }
    ]
  }
];

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

  componentDidMount() {
    this.props.fetchDestinations();
  }

  componentWillUnmount() {}

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          customMapStyle={mapStyle}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 42.348349,
            longitude: -71.069272,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          {/*{this.props.destinations*/}
          {/*  ? this.props.destinations.map(destination => {*/}
          {/*      console.log(destination);*/}
          {/*      return <Marker coordinate={destination.coordinate} />;*/}
          {/*    })*/}
          {/*  : null}*/}
        </MapView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    destinations: state.destinationData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDestinations: () => {
      dispatch(fetchDestinations());
    }
  };
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

export default ConnectedMapScreen;
