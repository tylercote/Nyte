import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import NavigationService from './services/NavigationService';
import AppNavigator from './navigation/AppNavigator';
import store from './store';
import { Provider } from 'react-redux';

type Props = {};
export default class App extends Component<Props> {
  state = {
    isLoadingComplete: false
  };

  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <AppNavigator
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
