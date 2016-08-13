/**
 * 
 */

import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
var styles = require('./style.js');

class EventAttribute extends Component {

  static defaultProps = {
  }

  constructor(props) {
    super(props);
  }

  render() {

    return (

      <Text style = {styles.attribute_text}>
        {this.props.EventAttribute}
      </Text>

    );
  }
}

module.exports = EventAttribute;