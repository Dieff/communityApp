/**
 * 
 */

import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
var styles = require('./style.js');

class EventDetails extends Component {

  static defaultProps = {
  }

  constructor(props) {
    super(props);
  }

  render() {

    return (

      <View style = {{flex: 1}}>

        <Text>
        Event Details
        </Text>

      </View> 
    );
  }
}

module.exports = EventDetails;