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

console.log('Im here');

var styles = require('./style.js');

class SettingButton extends Component {
  componentWillMount() {
    LayoutAnimation.spring();
  }
  _onPressButton() {
    LayoutAnimation.spring();
  }
  render() {
    return (
      <TouchableHighlight onPress={this._onPressButton}>
        <View style={styles.calendarButton}>
          <Text style={styles.calendarMenuWord}>Settings</Text>
        </View>
      </TouchableHighlight>
    );
  }
};

module.exports = SettingButton;
