/* @flow */

import React, { Component } from 'react';
import {
  Image,
  Dimensions,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Myform from './Myform';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logocontainer}>
          <Image
            style={styles.logo}
            source={require('./images/lcologo.png')}
          />
          <Text style={styles.title}> Login App </Text>
        </View>
        <View style={styles.myform}>
          <Myform />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282830',
    width: Dimensions.get('window').width
  },
  logocontainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    color: '#fff',
    paddingVertical: 20
  },
  myform: {
    flex: 1,

  }
});
