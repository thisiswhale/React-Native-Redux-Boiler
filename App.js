import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {AppRegistry, View, Text, StyleSheet} from 'react-native';

import Component1 from './components/Component1/Component1';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <View style={styles.container}>
            <Text>Add components here</Text>
            <Text>vv ~Component1 att the bottom~ vv
            </Text>
          </View>
          <Component1/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

AppRegistry.registerComponent('App', () => App);
