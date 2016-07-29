/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import Button from 'react-native-button';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  LayoutAnimation
} from 'react-native';

var styles = require('./style.js');
var CalendarButton = require('./../CalendarButton/cb.js');
var SettingButton = require('./../SettingsButton/sb.js');
var Test = require('./../Test/test.js');
class Menu extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'white'}} >
        <Text style={styles.menuTitle}> The Old Town Community App </Text>
      </View>
        <View style={styles.greenMenu} >
          <CalendarButton/>
          <View style={styles.buttonPlaceholder} />
          <SettingButton/>
        </View>
      </View>
    );
  }
};




//AppRegistry.registerComponent('CommunityApp', () => CommunityApp);
module.exports = Menu;
