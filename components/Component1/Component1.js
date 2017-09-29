import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';

export default class Component1 extends Component{

  render(){

    return(
        <View style={styles.container}>
          <Text style={styles.textColor}>Open up App.js to start working on your app!</Text>
          <Text>Components will be added here</Text>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'black',
     alignItems: 'center',
     justifyContent: 'center',
  },
  textColor:{
    color: 'green'
  }
});

AppRegistry.registerComponent('Component1', () => Component1);
