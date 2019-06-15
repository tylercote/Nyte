import React from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  SectionList,
  TouchableHighlight,
  Platform
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Animated, Easing, View, RefreshControl } from 'react-native';
import TabBarIcon from '../components/TabBarIcon';
import {connect} from "react-redux";

class ProfileScreen extends React.Component {
  static navigationOptions = () => {
    return {
      tabBarOnPress({ navigation, defaultHandler }) {
        // Haptic.impact(Haptic.ImpactFeedbackStyle.Heavy);
        defaultHandler();
      },
      tabBarLabel: 'Contacts',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          name={Platform.OS === 'ios' ? 'ios-people' : 'ios-contacts'}
        />
      ),
      tabBarColor: '#3D7068'
    };
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    console.log('ProfileScreen mounted.');
  }

  render() {
    return (
      <SafeAreaView>
        <View style={{ flex: 1 }}>
          <Text>Profile Screen</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 40,
    backgroundColor: 'orange',
    borderBottomWidth: 0
  },
  headerIcon: {
    color: 'grey'
  },
  containerView: {
    flex: 1,
    backgroundColor: '#121314'
  },
  container: {
    flex: 1,
    backgroundColor: '#121314'
  }
});

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

const ConnectedProfileScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileScreen);

export default ConnectedProfileScreen;
