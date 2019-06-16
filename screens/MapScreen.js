import React from 'react';
import {
  View,
  Text,
  Platform,
  Dimensions,
  Animated,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import TabBarIcon from '../components/TabBarIcon';
import Styles from '../constants/Styles';
import { __retrieveData } from '../services/LocalStorage';
import { connect } from 'react-redux';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  ProviderPropType,
  Animated as AnimatedMap,
  AnimatedRegion
} from 'react-native-maps';
import { fetchDestinations } from '../actions';
import { DestinationCarousel } from '../components/DestinationCarousel';
import PanController from '../services/PanController';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

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
    this._mapView = null;
    this.state = {
      region: {
        latitude: 42.348349,
        longitude: -71.069272,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      carouselOpen: false
    };

    this.goToDestination = this.goToDestination.bind(this);
  }

  componentDidMount() {
    this.props.fetchDestinations();
  }

  componentWillUnmount() {}

  goToDestination(destination) {
    this._mapView.fitToCoordinates(
      [
        {
          latitude: destination.latitude,
          longitude: destination.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        }
      ],
      2000
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          ref={mapView => {
            this._mapView = mapView;
          }}
          style={styles.map}
          customMapStyle={mapStyle}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 42.348349,
            longitude: -71.069272,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          // region={this.state.region}
        >
          {this.props.destinations.map(destination => {
            return (
              <Marker
                key={destination.id}
                coordinate={destination.coordinate}
              />
            );
          })}
        </MapView>
        <ActivityIndicator
          style={styles.loadingSpinner}
          animating={this.props.destinationsLoading}
          size="small"
          color="#00ff00"
        />
        <DestinationCarousel
          style={styles.carousel}
          destinations={this.props.destinations}
          goToDestination={this.goToDestination}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    destinationsLoading: state.destinationsLoading,
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
    alignItems: 'center',
    backgroundColor: 'white'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  loadingSpinner: {
    position: 'absolute',
    bottom: 400
  },
  carousel: {
    position: 'absolute',
    bottom: 50
  }
});

export default ConnectedMapScreen;
