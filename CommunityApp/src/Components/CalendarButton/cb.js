import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  LayoutAnimation
} from 'react-native';

var styles = require('./style.js');

class CalendarButton extends Component {
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
          <Text style={styles.calendarMenuWord}>Calendar</Text>
        </View>
      </TouchableHighlight>
    );
  }
};


module.exports = CalendarButton;
